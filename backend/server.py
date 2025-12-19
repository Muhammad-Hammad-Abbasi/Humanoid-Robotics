import os
import cohere
from google import genai  
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from qdrant_client import QdrantClient 
from dotenv import load_dotenv

# Load Environment Variables
load_dotenv()

# Initialize FastAPI
app = FastAPI() 

# --- 1. SETUP GOOGLE GEMINI (New SDK) ---
client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

# --- 2. SETUP COHERE (V2 Client) ---
co = cohere.ClientV2(api_key=os.getenv("COHERE_API_KEY"))

# --- 3. SETUP QDRANT ---
qdrant = QdrantClient(
    url=os.getenv("QDRANT_URL"),
    api_key=os.getenv("QDRANT_API_KEY"),
)

# CORS Setup
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- Data Models ---
class ChatRequest(BaseModel):
    message: str

class TranslateRequest(BaseModel):
    language: str
    chapter_id: str

# --- Chapter Path Mapping ---
CHAPTER_MAP = {
    "01": "../docs/01-physical-ai/index.mdx",
    "02": "../docs/02-ros2-system/index.mdx",
    "03": "../docs/03-digital-twins/index.mdx",
    "04": "../docs/04-nvidia-isaac/index.mdx",
    "05": "../docs/05-humanoid-dev/index.mdx",
    "06": "../docs/06-vla-models/index.mdx",
    "07": "../docs/07-conversational/index.mdx",
    "08": "../docs/08-capstone/index.mdx",
    "09": "../docs/09-hardware/index.mdx",
}

# --- API Endpoints ---

@app.post("/chat")
def chat(data: ChatRequest):
    try:
        print(f"Chat Query: {data.message}")
        
        # 1. Embed (Cohere V2)
        emb_response = co.embed(
            texts=[data.message],
            model="embed-english-v3.0",
            input_type="search_query",
            embedding_types=["float"]
        )
        vector = emb_response.embeddings.float_[0]

        # 2. Search (FIX: Using query_points instead of search)
        # Ye naye Qdrant version ka sahi tareeqa hai
        search_result = qdrant.query_points(
            collection_name="robotics_textbook_litellm",
            query=vector,
            limit=5
        ).points  # .points lagana zaroori hai
        
        # 3. Extract Context
        context_parts = []
        for hit in search_result:
            # Check payload safely
            if hit.payload and "content" in hit.payload:
                context_parts.append(hit.payload["content"])
            elif hit.payload and "text" in hit.payload:
                context_parts.append(hit.payload["text"])
        
        context_text = "\n---\n".join(context_parts)
        if not context_text:
            context_text = "No context found."

        # 4. Generate Answer (Google GenAI)
        prompt = f"Context:\n{context_text}\n\nQuestion: {data.message}\nAnswer:"
        
        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=prompt
        )
        
        return {"response": response.text}
        
    except Exception as e:
        print(f"Chat Error: {e}")
        return {"response": f"Backend Error: {str(e)}"}

@app.post("/translate")
def translate_chapter(data: TranslateRequest):
    print(f"Translation Request: {data.chapter_id} -> {data.language}")
    
    file_path = CHAPTER_MAP.get(data.chapter_id)
    
    if not file_path:
        return {"translation": f"Error: No file path found for ID '{data.chapter_id}'."}

    absolute_path = os.path.abspath(os.path.join(os.path.dirname(__file__), file_path))
    
    if not os.path.exists(absolute_path):
        return {"translation": f"Error: File not found at {absolute_path}"}

    try:
        with open(absolute_path, "r", encoding="utf-8") as f:
            content = f.read()
        
        truncated_content = content[:4000]

        prompt = f"Translate the following technical chapter summary into {data.language}. Keep formatting intact.\n\n{truncated_content}"

        # 5. Translate (Google GenAI)
        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=prompt
        )
        
        return {"translation": response.text}

    except Exception as e:
        print(f"Translation Error: {e}")
        return {"translation": f"Error: {str(e)}"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)