---
id: 28
title: Python RAG Backend Specification
stage: spec
date: 2025-12-12
surface: agent
model: gemini-1.5-flash-latest
feature: 006-python-rag-backend
branch: 001-textbook-ui-update
user: user
command: /sp.specify
labels: ["spec", "python", "rag", "backend"]
links:
  spec: specs/006-python-rag-backend/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - specs/006-python-rag-backend/spec.md
  - specs/006-python-rag-backend/checklists/requirements.md
tests:
---

## Prompt

```text
# Feature Specification: Python RAG Backend with UV **Goal**: Create a standalone Python backend to serve as the "Brain" for the Physical AI Textbook. **Core Function**: RAG (Retrieval Augmented Generation) pipeline using Qdrant (Vector DB), Cohere (Embeddings), and OpenAI (Answer Generation). **Tooling**: Use `uv` for dependency management. ## 1. Directory Structure - **Root**: Create a new folder named `backend` at the project root. - **Dependencies**: - `fastapi` (API Framework) - `uvicorn` (ASGI Server) - `python-dotenv` (Environment Variables) - `qdrant-client` (Vector Database connection) - `cohere` (Embedding Model) - `openai` (LLM for final answer) ## 2. Component 1: Data Ingestion (`ingest.py`) - **Purpose**: Read the documentation and save it to the Vector Database. - **Logic**: 1. Recursively find all `.mdx` files in the `../docs/` directory. 2. Read file content. 3. Clean the text (remove frontmatter/metadata if possible). 4. Use **Cohere** (`embed-english-v3.0`) to generate vector embeddings for each chapter. 5. Upload vectors + Payload (Text + Source URL) to **Qdrant Cloud**. ## 3. Component 2: Chat API (`server.py`) - **Purpose**: Respond to frontend chat requests. - **Endpoint**: `POST /chat` - **Logic**: 1. Receive user query (JSON). 2. Embed the query using **Cohere**. 3. Search **Qdrant** for the top 3 most relevant context chunks. 4. Construct a System Prompt: "You are an AI Tutor for the Physical AI Course. Answer based strictly on the context provided." 5. Send Context + Query to **OpenAI (GPT-4o or GPT-3.5)**. 6. Return the text response. ## 4. Constraint - **Read-Only**: Do NOT modify any file inside `../docs/`. Only read from them. - **Environment**: All API keys must be loaded from a `.env` file.
```

## Response snapshot

```text
I've created the `spec.md` and `requirements.md` files for the Python RAG Backend feature.

The feature specification is now complete and validated.
```

## Outcome

- ✅ Impact: A new feature specification for a Python RAG backend has been created.
- 🧪 Tests: The specification has been validated against a requirements checklist.
- 📁 Files: `specs/006-python-rag-backend/spec.md` and `specs/006-python-rag-backend/checklists/requirements.md` were created.
- 🔁 Next prompts: The next step is to create a plan for this feature using `/sp.plan`.
