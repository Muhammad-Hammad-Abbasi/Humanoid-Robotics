# Implementation Plan: Backend Setup & RAG Pipeline

**Goal**: Initialize the `backend` folder, install dependencies using `uv`, and implement the Ingestion and API scripts.

## Phase 1: Initialization & Environment
1.  **Setup Project**:
    - Create directory `backend/`.
    - Run `uv init` inside `backend`.
    - Create `backend/.env` file (User will populate keys later).
    - Create `backend/.gitignore` (Exclude `.env`, `__pycache__`, `.venv`).

2.  **Install Libraries**:
    - Run command: `uv add fastapi uvicorn qdrant-client cohere openai python-dotenv`.

## Phase 2: Knowledge Base (Ingestion)
3.  **Create `backend/ingest.py`**:
    - **Imports**: `os`, `glob`, `cohere`, `qdrant_client`, `dotenv`.
    - **Function `load_docs()`**: Iterate over `../docs/**/*.mdx` and read text.
    - **Function `embed_and_store()`**:
        - Connect to Qdrant (URL/Key from env).
        - Re-create collection `robotics_textbook` (Vector size: 1024 for Cohere).
        - Loop through docs, embed with Cohere client, upload to Qdrant.
    - **Main Execution**: Run the functions when script is executed.

## Phase 3: The API Server
4.  **Create `backend/server.py`**:
    - **Setup**: Initialize FastAPI app.
    - **Data Model**: Create Pydantic model `class ChatRequest(BaseModel): message: str`.
    - **Endpoint**: `@app.post("/chat")`
    - **RAG Logic**:
        - Embed `request.message` (Cohere).
        - `qdrant.search(...)` to get context.
        - `openai.chat.completions.create(...)` with context + message.
        - Return `{"response": ai_message}`.

## Phase 4: Run Configuration
5.  **Documentation**:
    - Update `backend/README.md` with instructions on how to run `uv run ingest.py` and `uv run uvicorn server:app --reload`.