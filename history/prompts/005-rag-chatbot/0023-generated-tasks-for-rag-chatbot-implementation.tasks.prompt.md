---
id: 0023
title: Generated Tasks for RAG Chatbot Implementation
stage: tasks
date: 2025-12-10
surface: agent
model: gemini-1.5-flash-latest
feature: 005-rag-chatbot
branch: 001-textbook-ui-update
user: user
command: /sp.tasks # Implementation Plan: Fix Chatbot API & Implement Context RAG ...
labels: ["tasks", "chatbot", "rag"]
links:
  spec: specs/005-rag-chatbot/spec.md
  plan: specs/005-rag-chatbot/plan.md
  ticket: null
  adr: null
  pr: null
files:
  - specs/005-rag-chatbot/tasks.md
tests:

---

## Prompt

```text
/sp.tasks # Implementation Plan: Fix Chatbot API & Implement Context RAG

**Issue**: Previous API calls failed with 404. Chatbot lacks knowledge of the book.
**Solution**: Correct the API endpoint and inject page content into the prompt.

## Phase 1: Context Extraction Logic
1. **Update `src/components/Chatbot/ChatWidget.tsx`**:
   - **Add Helper Function**: `getPageContext()`
     - Logic: `return document.querySelector('main')?.innerText || '';`
     - This grabs only the main chapter text, ignoring sidebars/navbars.

## Phase 2: Fix API Call (Gemini Pro)
2. **Rewrite `handleSend` function in `ChatWidget.tsx`**:
   - **Endpoint**: Use `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`
   - **Method**: `POST`
   - **Headers**: `{'Content-Type': 'application/json'}`
   - **Prompt Engineering**:
     - Construct payload:
       ```json
       {
         "contents": [{
           "parts": [{
             "text": "Context from textbook: " + pageContext + "\n\nUser Question: " + userMessage
           }]
         }]
       }
       ```
   - **Error Handling**: Wrap in `try/catch` and alert the user if the Key is missing or invalid.

## Phase 3: Verify & Build
3. **Build**:
   - Run `npm run build` to ensure TypeScript compiles correctly.
```

## Response snapshot

```text
The `tasks.md` file has been generated.
```

## Outcome

- ✅ Impact: An actionable, dependency-ordered `tasks.md` file has been generated for the RAG-style chatbot feature.
- 🧪 Tests: N/A (tasks generated, not executed yet).
- 📁 Files: `specs/005-rag-chatbot/tasks.md` created.
- 🔁 Next prompts: The user can now proceed with executing the tasks in `tasks.md`.

## Evaluation notes (flywheel)

- Failure modes observed: N/A
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment: N/A
