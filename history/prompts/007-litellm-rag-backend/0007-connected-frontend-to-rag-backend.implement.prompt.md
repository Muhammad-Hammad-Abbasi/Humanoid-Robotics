---
id: 0007
title: Connected Frontend to RAG Backend
stage: implement
date: 2025-12-13
surface: agent
model: gemini-1.5-pro
feature: 007-litellm-rag-backend
branch: 007-litellm-rag-backend
user: n/a
command: /sp.plan
labels: [implement, frontend, backend, integration]
links:
  spec: specs/007-litellm-rag-backend/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - src/components/Chatbot/ChatWidget.tsx
tests:
  []
---

## Prompt

# Implementation Plan: Connect Chatbot UI to RAG Backend

**Context**: The Python Backend (`localhost:8000`) is working perfectly.
**Goal**: Update the Frontend `ChatWidget` to consume the local API instead of calling Gemini directly.

## Phase 1: Update Chat Logic (`ChatWidget.tsx`)
1. **Overwrite `src/components/Chatbot/ChatWidget.tsx`**:
   - **API URL**: Set to `http://127.0.0.1:8000/chat`.
   - **Request Format**: Change body from Google's format to our simple format: `JSON.stringify({ message: userMessage })`.
   - **Response Handling**: The backend returns `{ "response": "..." }`, so update the code to read `data.response`.
   - **Error Handling**: Keep the try/catch block but show specific backend errors if any.

   - **Code Logic Preview**:
     ```javascript
     const response = await fetch("http://127.0.0.1:8000/chat", {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify({ message: text }),
     });
     const data = await response.json();
     const aiMessage = data.response; // Use this to display
     ```

## Phase 2: Final Verification
2. **Build**:
   - Run `npm run build` to ensure types are correct.

## Response snapshot

I have successfully connected the frontend chat widget to the local RAG backend.
- The `handleSend` function in `src/components/Chatbot/ChatWidget.tsx` has been updated to send requests to `http://127.0.0.1:8000/chat`.
- The request body and response handling have been updated to match the backend's API.
- The project builds successfully, indicating no type errors.

## Outcome

- ✅ Impact: The frontend is now fully integrated with the local RAG backend.
- 🧪 Tests: No new tests were added.
- 📁 Files: `src/components/Chatbot/ChatWidget.tsx`
- 🔁 Next prompts: The feature is ready for end-to-end testing.
- 🧠 Reflection: The process was straightforward. The previous work to get the backend running made this a simple frontend update.

## Evaluation notes (flywheel)

- Failure modes observed: None.
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): n/a
