---
id: 0012
title: Implemented 'Thinking' State for Chatbot
stage: implement
date: 2025-12-13
surface: agent
model: gemini-1.5-pro
feature: 007-litellm-rag-backend
branch: 007-litellm-rag-backend
user: n/a
command: /sp.plan
labels: [implement, frontend, ui, react]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - src/components/Chatbot/ChatWidget.tsx
tests:
  []
---

## Prompt

# Implementation Plan: Add 'Thinking' State to Chatbot

**Goal**: Show a visual "Thinking..." indicator or animation inside the chat window while the AI is processing a request.
**Constraint**: Modify only the UI logic in `ChatWidget.tsx`. Keep the backend connection intact.

## Phase 1: Update Chat Logic (`ChatWidget.tsx`)
1. **Overwrite `src/components/Chatbot/ChatWidget.tsx`**:
   - **State**: Add `const [isLoading, setIsLoading] = useState(false)`.
   - **Handler**:
     - Inside `handleSend`: Set `setIsLoading(true)` before the `fetch` call.
     - In `finally` block (after success or error): Set `setIsLoading(false)`.
   - **UI Rendering**:
     - Inside the message list, add a conditional check: `{isLoading && <ThinkingBubble />}`.
     - **ThinkingBubble Design**: A light gray bubble on the left (Bot side) that says "Thinking..." with a simple opacity animation or just static text for reliability.
     - **Disable Input**: Disable the "Send" button while `isLoading` is true to prevent double-sending.

## Phase 2: Build
2. **Build**:
   - Run `npm run build`.

## Response snapshot

I have successfully implemented the "Thinking" state for the chatbot.
- Added an `isLoading` state to the `ChatWidget.tsx` component.
- The `handleSend` function now sets `isLoading` to true before the API call and false in a `finally` block.
- A "Thinking..." bubble is conditionally rendered during the loading state.
- The input field and send button are disabled while the bot is thinking.
- The project builds successfully.

## Outcome

- ✅ Impact: The user now has clear visual feedback when the chatbot is processing a request.
- 🧪 Tests: No new tests were added.
- 📁 Files: `src/components/Chatbot/ChatWidget.tsx`
- 🔁 Next prompts: The feature is complete.
- 🧠 Reflection: This was a standard and important UI/UX improvement that was straightforward to implement in React.

## Evaluation notes (flywheel)

- Failure modes observed: None.
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): n/a
