---
id: 0022
title: Implemented RAG-Style Chatbot with Context
stage: implement
date: 2025-12-10
surface: agent
model: gemini-1.5-flash-latest
feature: 005-rag-chatbot
branch: 001-textbook-ui-update
user: user
command: /sp.plan # Implementation Plan: Fix Chatbot API & Implement Context RAG ...
labels: ["implement", "chatbot", "rag", "gemini"]
links:
  spec: specs/005-rag-chatbot/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - specs/005-rag-chatbot/plan.md
  - src/components/Chatbot/ChatWidget.tsx
tests:

---

## Prompt

```text
/sp.plan # Implementation Plan: Fix Chatbot API & Implement Context RAG

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
The build was successful. All phases of the implementation plan are complete.
```

## Outcome

- ✅ Impact: The RAG-style chatbot is now implemented, extracting context from the current page and using the Gemini Pro API to answer questions.
- 🧪 Tests: Build verification passed.
- 📁 Files: `specs/005-rag-chatbot/plan.md` created, `src/components/Chatbot/ChatWidget.tsx` modified.
- 🔁 Next prompts: The project is ready for manual verification of the chatbot's RAG functionality.

## Evaluation notes (flywheel)

- Failure modes observed: None in this phase. The previous implementation steps provided a good foundation.
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment: N/A
