---
id: 0021
title: Created RAG Chatbot Feature Specification
stage: spec
date: 2025-12-10
surface: agent
model: gemini-1.5-flash-latest
feature: 005-rag-chatbot
branch: 001-textbook-ui-update
user: user
command: /sp.specify # Feature Specification: RAG-Style Chatbot (Client-Side) ...
labels: ["spec", "chatbot", "rag"]
links:
  spec: specs/005-rag-chatbot/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - specs/005-rag-chatbot/spec.md
  - specs/005-rag-chatbot/checklists/requirements.md
tests:

---

## Prompt

```text
# Feature Specification: RAG-Style Chatbot (Client-Side) **Goal**: Implement a Chatbot that answers questions based on the textbook content (RAG behavior) using Google Gemini API. **Priority**: Critical (Hackathon Requirement). **Tech Stack**: TypeScript (React), Gemini API. ## 1. Functional Requirements - **Context Awareness**: When a user asks a question, the chatbot must retrieve the text content of the currently visible chapter. - **System Prompt**: The AI must be instructed: "You are an expert tutor for this Physical AI textbook. Answer the user's question using ONLY the context provided below." - **API Integration**: Fix the `404` error by using the stable `gemini-pro` model and correct HTTP methods. ## 2. Technical Implementation - **File**: `src/components/Chatbot/ChatWidget.tsx` - **Logic flow**: 1. User types "What is ROS 2?" 2. Code grabs `document.body.innerText` (The book content). 3. Code truncates text to ~3000 chars (to fit token limits). 4. Request sent to Gemini: `Context: [Book Text]... Question: What is ROS 2?` 5. Display response. ## 3. Success Criteria - Chatbot opens and closes. - API returns a valid response (No 404). - Answers are specific to the text on the screen (proving RAG behavior).
```

## Response snapshot

```text
I've created the `spec.md` and `requirements.md` files for the RAG-style Chatbot feature.

The feature specification is now complete and validated.
```

## Outcome

- ✅ Impact: A detailed feature specification for the RAG-style Chatbot has been created.
- 🧪 Tests: The specification was validated against a quality checklist.
- 📁 Files: `specs/005-rag-chatbot/spec.md` and `specs/005-rag-chatbot/checklists/requirements.md` created.
- 🔁 Next prompts: Ready for `/sp.plan` to create an implementation plan for this feature.

## Evaluation notes (flywheel)

- Failure modes observed: Initial attempts to use `create-new-feature.ps1` failed due to argument parsing issues with multi-line strings. Manual creation of files was successful.
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment: N/A

```