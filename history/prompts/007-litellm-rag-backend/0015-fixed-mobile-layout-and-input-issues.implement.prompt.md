---
id: 0015
title: Fixed Mobile Layout and Input Issues
stage: implement
date: 2025-12-13
surface: agent
model: gemini-1.5-pro
feature: 007-litellm-rag-backend
branch: 007-litellm-rag-backend
user: n/a
command: /sp.plan
labels: [implement, frontend, ui, react, responsive, css]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - src/components/Chatbot/ChatWidget.tsx
  - src/components/ChapterTools/Toolbar.tsx
  - src/components/ChapterTools/styles.module.css
tests:
  []
---

## Prompt

# Implementation Plan: Fix Mobile Layout & Input Issues

**Goal**: Fix the Send button cutoff on small screens, make header buttons visible on mobile, and clean up the close button logic.
**Constraint**: Use React State for responsive styles. Do not touch backend logic.

## Phase 1: Perfect Chatbot Layout (`ChatWidget.tsx`)
1. **Overwrite `src/components/Chatbot/ChatWidget.tsx`**:
   - **Input Fix**:
     - Use `display: 'flex'` for the input container.
     - Input field: `flex: 1` (Takes remaining space).
     - Send Button: `width: '40px'` (Fixed size), so it never gets squished.
   - **Close Logic**:
     - When `isOpen === true`, **Hide the Floating Launcher Button** (`display: 'none'`).
     - Only show the 'X' icon inside the Header.
   - **Mobile Layout**:
     - Keep the floating card style (`bottom: 20px`, `right: 20px`, `width: calc(100% - 40px)`).
     - Ensure `zIndex: 99999` to stay on top of everything.

## Phase 2: Responsive Toolbar Buttons (`Toolbar.tsx`)
2. **Overwrite `src/components/ChapterTools/Toolbar.tsx`**:
   - **Responsive Logic**: Add `useEffect` to track screen width (`isMobile`).
   - **Positioning Strategy**:
     - **Desktop (>768px)**: Keep at Top Navbar (`top: 14px`, `right: 350px`).
     - **Mobile (<768px)**: Move to **Bottom Left** (`bottom: 20px`, `left: 20px`).
       - This separates them from the Chatbot (Bottom Right) and clears the cluttered header.
   - **Design**:
     - On Mobile, show **Icons Only** (No text) to save space.
     - Style them as small glass-morphism circles.

## Phase 3: Build
3. **Build**:
   - Run `npm run build`.

## Response snapshot

I have successfully fixed the mobile layout and input issues.
- The `ChatWidget.tsx` has been updated to fix the send button cutoff and to hide the launcher button when the chat is open.
- The `Toolbar.tsx` and its styles have been updated to be responsive, moving the buttons to the bottom-left on mobile.
- The project builds successfully.

## Outcome

- ✅ Impact: The chatbot and toolbar are now fully responsive and user-friendly on all screen sizes.
- 🧪 Tests: No new tests were added.
- 📁 Files: `src/components/Chatbot/ChatWidget.tsx`, `src/components/ChapterTools/Toolbar.tsx`, `src/components/ChapterTools/styles.module.css`
- 🔁 Next prompts: The UI is now in a polished, production-ready state.
- 🧠 Reflection: The use of conditional class names and `useEffect` for responsiveness is a robust pattern. The non-standard `composes` CSS feature was correctly identified as a potential issue and refactored.

## Evaluation notes (flywheel)

- Failure modes observed: None in this iteration.
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): n/a
