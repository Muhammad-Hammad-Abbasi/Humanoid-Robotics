---
id: 0014
title: Fixed Chatbot Size and Close Mechanism
stage: implement
date: 2025-12-13
surface: agent
model: gemini-1.5-pro
feature: 007-litellm-rag-backend
branch: 007-litellm-rag-backend
user: n/a
command: /sp.plan
labels: [implement, frontend, ui, react, responsive]
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

# Implementation Plan: Fix Chatbot Size & Close Mechanism

**Goal**: Optimize mobile layout (reduce height) and re-introduce a Close button so users don't get stuck.
**Constraint**: Keep backend logic intact.

## Phase 1: Update Chat UI (`ChatWidget.tsx`)
1. **Overwrite `src/components/Chatbot/ChatWidget.tsx`**:
   - **Header Update**: Add a "Close" (✕) icon button in the top-right of the chat header.
     - **Action**: Clicking it sets `isOpen(false)`.
   - **Mobile Style Tweak**:
     - Change mobile height from `100%` (or default) to **`height: '70vh'`** (70% of screen).
     - Keep `bottom: 0`, `left: 0`, `right: 0`.
     - Add `borderTopLeftRadius: 20px`, `borderTopRightRadius: 20px`.
   - **Launcher Update**:
     - Ensure clicking the Floating Button toggles state (`!isOpen`).
     - If chat is Open, maybe hide the floating button OR turn it into a "Close" icon. (Let's keep it simple: Floating button always toggles).

## Phase 2: Build
2. **Build**:
   - Run `npm run build`.

## Response snapshot

I have successfully updated the chatbot UI.
- A close button has been re-introduced to the chat window header.
- The mobile view's height has been adjusted to `70vh` for a better user experience.
- The project builds successfully.

## Outcome

- ✅ Impact: The chatbot is now more user-friendly on mobile devices and can be closed easily.
- 🧪 Tests: No new tests were added.
- 📁 Files: `src/components/Chatbot/ChatWidget.tsx`
- 🔁 Next prompts: The feature is complete.
- 🧠 Reflection: This was a necessary adjustment to the UI to improve usability.

## Evaluation notes (flywheel)

- Failure modes observed: None.
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): n/a
