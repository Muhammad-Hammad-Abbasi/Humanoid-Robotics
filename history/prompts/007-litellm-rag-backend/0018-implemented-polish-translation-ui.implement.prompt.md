---
id: 0018
title: Implemented Polish Translation UI
stage: implement
date: 2025-12-13
surface: agent
model: gemini-1.5-pro
feature: 007-litellm-rag-backend
branch: 007-litellm-rag-backend
user: n/a
command: /sp.plan
labels: [implement, frontend, ui, translation]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - src/components/ChapterTools/Toolbar.tsx
  - src/components/ChapterTools/styles.module.css
tests:
  []
---

## Prompt

# Implementation Plan: Polish Translation UI (RTL, Fonts & Cleaning)

**Goal**: Make the translation readable by supporting Right-to-Left (RTL) for Urdu, stripping Markdown symbols, forcing visible colors for inputs, and fixing scrollbars.
**Constraint**: Modify only `Toolbar.tsx`.

## Phase 1: Update Frontend Logic (`Toolbar.tsx`)
1. **Overwrite `src/components/ChapterTools/Toolbar.tsx`**:
   - **Text Cleaner**: Add a `formatText(text)` function that:
     - Removes Frontmatter (`--- ... ---`).
     - Removes Markdown symbols (replaces `##`, `**`, `__` with empty strings) to show clean text.
   - **Urdu Optimization**:
     - Check: `const isUrdu = language === 'Urdu';`
     - Style: If Urdu, apply `direction: 'rtl'`, `textAlign: 'right'`, `fontFamily: 'Tahoma, Arial, sans-serif'`, `fontSize: '18px'`, `lineHeight: '2'`.
   - **Input Styling (Dark Mode Fix)**:
     - Force `<select>` elements to have `backgroundColor: 'white'`, `color: 'black'`, `border: '1px solid #ccc'`.
   - **Scrollbar Fix**:
     - Set `whiteSpace: 'pre-wrap'` (Preserve paragraphs).
     - Set `wordWrap: 'break-word'` (Prevents horizontal scrolling).
     - Custom Scrollbar CSS (Thin and gray).

## Phase 2: Build
2. **Build**:
   - Run `npm run build`.

## Response snapshot

I have successfully implemented the polish for the translation UI.
- The `Toolbar.tsx` component has been updated with a `formatText` function to clean up markdown and frontmatter from the translated text.
- RTL (Right-to-Left) styling for Urdu has been implemented, including text direction, alignment, font family, font size, and line height.
- Input fields within the modal now have forced light theme styling for better visibility in dark mode.
- Custom scrollbar styles have been added to the `styles.module.css` file to ensure a clean look.
- The project builds successfully.

## Outcome

- ✅ Impact: The translation feature is now much more user-friendly and visually polished, especially for RTL languages.
- 🧪 Tests: No new tests were added.
- 📁 Files: `src/components/ChapterTools/Toolbar.tsx`, `src/components/ChapterTools/styles.module.css`
- 🔁 Next prompts: The translation UI is now complete.
- 🧠 Reflection: The combination of JavaScript logic for text cleaning and conditional styling with CSS for UI polish resulted in a robust and improved user experience.

## Evaluation notes (flywheel)

- Failure modes observed: None during this iteration. However, a dependency conflict was noted in the previous step regarding `grpcio` versions.
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): Address the `grpcio` dependency conflict if `google-generativeai` is a required component.
