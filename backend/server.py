
import os
from fastapi import FastAPI
from pydantic import BaseModel
import cohere
from qdrant_client import QdrantClient
import openai
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

# Initialize clients
co = cohere.Client(os.getenv("COHERE_API_KEY"))
qdrant = QdrantClient(
    url=os.getenv("QDRANT_URL"), 
    api_key=os.getenv("QDRANT_API_KEY"),
)
openai.api_key = os.getenv("OPENAI_API_KEY")

class ChatRequest(BaseModel):
    message: str

@app.post("/chat")
async def chat(request: ChatRequest):
    # Embed the user's message
    query_embedding = co.embed(
        texts=[request.message],
        model="embed-english-v3.0",
        input_type="search_query"
    ).embeddings[0]

    # Search for relevant context in Qdrant
    search_result = qdrant.search(
        collection_name="robotics_textbook",
        query_vector=query_embedding,
        limit=3  # Get top 3 most relevant documents
    )

    context = " ".join([hit.payload.get("path", "") for hit in search_result])

    # Combine context and message for OpenAI
    prompt = f"Context: {context}\n\nUser message: {request.message}\n\nAI response:"

    # Get response from OpenAI
    try:
        completion = openai.chat.completions.create(
            model="gpt-4",
            messages=[
                {"role": "system", "content": "You are a helpful assistant for a robotics textbook."},
                {"role": "user", "content": prompt}
            ]
        )
        ai_message = completion.choices[0].message.content
        return {"response": ai_message}
    except Exception as e:
        return {"response": f"An error occurred: {str(e)}"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
