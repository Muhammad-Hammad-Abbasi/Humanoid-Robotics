---
id: 0001
title: Created LiteLLM RAG Backend Feature Spec
stage: spec
date: 2025-12-13
surface: agent
model: gemini-1.5-pro
feature: 007-litellm-rag-backend
branch: 007-litellm-rag-backend
user: n/a
command: /sp.specify
labels: [spec, backend, python, litellm]
links:
  spec: specs/007-litellm-rag-backend/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - specs/007-litellm-rag-backend/spec.md
  - specs/007-litellm-rag-backend/checklists/requirements.md
tests:
  []
---

## Prompt

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

## Response snapshot

I have successfully created the feature specification and checklist for the `007-litellm-rag-backend` feature.
- Created directory `specs/007-litellm-rag-backend/`.
- Created directory `specs/007-litellm-rag-backend/checklists/`.
- Created the `spec.md` file at `specs/007-litellm-rag-backend/spec.md`.
- Created the `requirements.md` checklist file at `specs/007-litellm-rag-backend/checklists/requirements.md` and marked all items as complete after validation.
- Switched to the `007-litellm-rag-backend` branch.
- Committed the changes to the new branch.

The specification is now complete and validated.

## Outcome

- ✅ Impact: A new feature specification and its checklist have been created for the LiteLLM RAG Backend.
- 🧪 Tests: No automated tests were run during spec creation.
- 📁 Files: `specs/007-litellm-rag-backend/spec.md`, `specs/007-litellm-rag-backend/checklists/requirements.md`, `history/prompts/007-litellm-rag-backend/0001-created-litellm-rag-backend-feature-spec.spec.prompt.md`.
- 🔁 Next prompts: Proceed to the planning phase using `/sp.plan`.
- 🧠 Reflection: Encountered persistent issues with executing the PowerShell `create-new-feature.ps1` script, leading to manual creation of directories, files, and branch switching. The `replace` tool also exhibited inconsistent behavior when counting checkboxes, requiring a direct file overwrite. The PHR directory for the new feature also had to be created manually.

## Evaluation notes (flywheel)

- Failure modes observed: PowerShell script execution issues (ParameterBindingException, cmdlet not found), `replace` tool miscounting `old_string` occurrences, PHR directory not created by script.
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): Investigate robust PowerShell script execution and `replace` tool behavior.
