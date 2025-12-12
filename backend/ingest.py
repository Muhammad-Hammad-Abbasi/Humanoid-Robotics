
import os
import glob
import cohere
from qdrant_client import QdrantClient, models
from dotenv import load_dotenv

load_dotenv()

# Initialize Cohere client
co = cohere.Client(os.getenv("COHERE_API_KEY"))

def load_docs():
    """Load all .mdx files from the docs directory."""
    return glob.glob("../docs/**/*.mdx", recursive=True)

def embed_and_store(docs):
    """Embed documents and store them in Qdrant."""
    qdrant = QdrantClient(
        url=os.getenv("QDRANT_URL"), 
        api_key=os.getenv("QDRANT_API_KEY"),
    )

    # Re-create the collection
    qdrant.recreate_collection(
        collection_name="robotics_textbook",
        vectors_config=models.VectorParams(size=1024, distance=models.Distance.COSINE),
    )

    for i, doc_path in enumerate(docs):
        with open(doc_path, "r", encoding="utf-8") as f:
            content = f.read()
        
        if not content.strip():
            print(f"Skipping empty file: {doc_path}")
            continue

        response = co.embed(
            texts=[content],
            model="embed-english-v3.0",
            input_type="search_document"
        )
        
        qdrant.upload_points(
            collection_name="robotics_textbook",
            points=[
                models.PointStruct(
                    id=i,
                    vector=response.embeddings[0],
                    payload={"path": doc_path}
                )
            ],
        )
        print(f"Uploaded {doc_path}")

if __name__ == "__main__":
    documents = load_docs()
    if documents:
        embed_and_store(documents)
        print("Data ingestion complete.")
    else:
        print("No documents found to ingest.")
