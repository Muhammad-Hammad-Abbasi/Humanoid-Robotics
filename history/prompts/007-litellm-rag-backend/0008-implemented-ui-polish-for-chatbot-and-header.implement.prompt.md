---
id: 0008
title: Implemented UI Polish for Chatbot and Header
stage: implement
date: 2025-12-13
surface: agent
model: gemini-1.5-pro
feature: 007-litellm-rag-backend
branch: 007-litellm-rag-backend
user: n/a
command: /sp.plan
labels: [implement, frontend, ui, css]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - src/components/Chatbot/ChatWidget.tsx
  - src/components/Chatbot/styles.module.css
  - src/components/ChapterTools/styles.module.css
tests:
  []
---

## Prompt

# Implementation Plan: UI Polish (Chatbot & Header Actions)

**Goal**: Move Chatbot to Bottom-Right with a modern "Bubble" design. Move Action Buttons (Translate/Personalize) to the Navbar area.
**Constraint**: PRESERVE all existing API/Backend logic. Only change JSX/CSS.

## Phase 1: Modern Chatbot UI (Bottom-Right)
1. **Update `src/components/Chatbot/ChatWidget.tsx`**:
   - **Position**: Change from `left: 20px` to `right: 20px`.
   - **Design**:
     - **Launcher**: Create a round Floating Action Button (FAB) with a generic icon (💬) that toggles the window.
     - **Window**: Use a card design with `shadow-xl`, `rounded-2xl`.
     - **Messages**: Style user messages (Blue, Right-aligned) vs AI messages (Gray, Left-aligned).
     - **Header**: Add a clean header "AI Tutor" with a Close button.
   - **Logic Preservation**: Keep the exact `fetch` call to `http://127.0.0.1:8000/chat`.

## Phase 2: Header Integration (Top-Right Actions)
2. **Update `src/components/ChapterTools/Toolbar.tsx`**:
   - **Position**: Move from `bottom-left` to `top: 14px`, `right: 150px` (To sit inside the Docusaurus Navbar, next to Search/GitHub).
   - **Style**: Change big buttons to compact "Outline Buttons" or "Icons with Tooltips" so they fit in the header.
   - **Z-Index**: Set `z-index: 100` to ensure they float *above* the navbar text but look integrated.

## Phase 3: Final Build
3. **Build**:
   - Run `npm run build`.

## Response snapshot

I have successfully implemented the requested UI polish.
- The chatbot has been moved to the bottom-right and restyled with a modern FAB launcher and chat window.
- The action buttons in the `Toolbar` component have been moved to the top-right navbar area and styled to be more compact.
- The project builds successfully.

## Outcome

- ✅ Impact: The chatbot and action buttons now have a more modern and integrated look and feel.
- 🧪 Tests: No new tests were added.
- 📁 Files: `src/components/Chatbot/ChatWidget.tsx`, `src/components/Chatbot/styles.module.css`, `src/components/ChapterTools/styles.module.css`
- 🔁 Next prompts: The UI changes are complete.
- 🧠 Reflection: The implementation was straightforward and involved updating the JSX and CSS as planned. I noted that `Toolbar.tsx` also has a hardcoded API key, which could be addressed in a future refactoring.

## Evaluation notes (flywheel)

- Failure modes observed: None.
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): n/a
