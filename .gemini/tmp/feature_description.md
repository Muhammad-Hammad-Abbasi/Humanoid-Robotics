# Feature Specification: FastAPI Backend with LiteLLM & RAG

**Goal**: Build a Python backend using `fastapi` and `litellm` (Gemini 2.0 Flash) that answers questions based on the textbook content.
**Tooling**: Use `uv` for dependency management.

## 1. Directory Structure (`backend/`)
- `server.py`: The main API file (FastAPI + LiteLLM).
- `ingest.py`: Script to read `../docs/` and save embeddings to Qdrant.
- `.env`: Store API Keys (GEMINI_API_KEY, QDRANT_URL, QDRANT_API_KEY).

## 2. API Implementation (`server.py`)
- **Structure**: Use the user's provided snippet as a base but add RAG logic.
- **Libraries**: `fastapi`, `uvicorn`, `litellm`, `pydantic`, `python-dotenv`, `qdrant-client`, `cohere`.
- **Logic**:
  1. Receive `ChatRequest`.
  2. Embed the message using **Cohere**.
  3. Search **Qdrant** for relevant book context.
  4. Pass `Context + Question` to `litellm.completion` (Model: `gemini/gemini-2.0-flash`).
  5. Return response.

## 3. Ingestion Implementation (`ingest.py`)
- **Logic**: Read all `.mdx` files from `../docs`, embed them using Cohere, and upload to Qdrant Cloud.

## 4. Dependencies
- Run `uv init` and `uv add fastapi uvicorn litellm python-dotenv pydantic qdrant-client cohere`.
