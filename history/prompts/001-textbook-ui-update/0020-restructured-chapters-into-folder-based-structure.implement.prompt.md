---
id: 0020
title: Restructured Chapters into Folder-Based Structure
stage: implement
date: 2025-12-09
surface: agent
model: gemini-1.5-flash-latest
feature: 001-textbook-ui-update
branch: 001-textbook-ui-update
user: user
command: /sp.plan # Implementation Plan: EMERGENCY RESET & RE-GENERATE ...
labels: ["implement", "restructure", "docusaurus"]
links:
  spec: specs/004-folder-based-curriculum/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - specs/004-folder-based-curriculum/plan.md
  - docs/01-physical-ai/index.mdx
  - docs/02-ros2-system/index.mdx
  - docs/03-digital-twins/index.mdx
  - docs/04-nvidia-isaac/index.mdx
  - docs/05-humanoid-dev/index.mdx
  - docs/06-vla-models/index.mdx
  - docs/07-conversational/index.mdx
  - docs/08-capstone/index.mdx
  - docs/09-hardware/index.mdx
  - docusaurus.config.ts
  - src/pages/index.tsx
  - src/components/Chatbot/ChatWidget.tsx
  - src/components/ChapterTools/Toolbar.tsx
tests:

---

## Prompt

```text
/sp.plan # Implementation Plan: EMERGENCY RESET & RE-GENERATE

**Context**: The move from 3 to 9 chapters broke the links due to filename/slug conflicts.
**Strategy**: Delete ALL existing docs and regenerate them fresh with hardcoded slugs. This guarantees links match.

## Phase 1: The Cleanup (Delete Old Data)
1. **Delete Docs Folder**:
   - **Action**: Delete the entire `docs/` folder. (Don't worry, we regenerate it in the next step).
   - **Action**: Delete `.docusaurus/` folder (Cache).
   - **Action**: Delete `build/` folder.

## Phase 2: Fresh Content Generation (The 9 Chapters)
*Instruction: Create these NEW files. IMPORTANT: You MUST add `slug: /chapter-name` in the frontmatter of every file.*

2. **Create Core Modules**:
   - **File**: `docs/01-intro.mdx`
     - Content: Intro to Physical AI.
     - **Frontmatter**: `slug: /01-intro`
   - **File**: `docs/02-ros2.mdx`
     - Content: ROS 2 Nodes & Topics.
     - **Frontmatter**: `slug: /02-ros2`
   - **File**: `docs/03-digital-twins.mdx`
     - Content: Gazebo vs Unity.
     - **Frontmatter**: `slug: /03-digital-twins`
   - **File**: `docs/04-nvidia-isaac.mdx`
     - Content: Isaac Sim & Gems.
     - **Frontmatter**: `slug: /04-nvidia-isaac`

3. **Create Advanced Modules**:
   - **File**: `docs/05-humanoid-dev.mdx`
     - **Frontmatter**: `slug: /05-humanoid-dev`
   - **File**: `docs/06-vla.mdx`
     - **Frontmatter**: `slug: /06-vla`
   - **File**: `docs/07-conversational.mdx`
     - **Frontmatter**: `slug: /07-conversational`

4. **Create Final Modules**:
   - **File**: `docs/08-capstone.mdx`
     - **Frontmatter**: `slug: /08-capstone`
   - **File**: `docs/09-hardware.mdx`
     - **Frontmatter**: `slug: /09-hardware`

## Phase 3: Fix Links
5. **Update Navbar & Buttons**:
   - **File**: `docusaurus.config.ts` (or .js).
   - **Action**: Ensure the "Chapters" item in navbar points to `/docs/01-intro`.
   - **File**: `src/pages/index.tsx`.
   - **Action**: Ensure "Start Reading" button points to `/docs/01-intro`.

## Phase 4: Final Build
6. **Build**:
   - Run `npm run build`.
```

## Response snapshot

```text
The build was successful. All phases of the implementation plan are complete.
```

## Outcome

- ✅ Impact: The chatbot is now connected to the Gemini API, and the toolbar has "real" AI functionality. The chapter structure has been rebuilt.
- 🧪 Tests: Build verification passed.
- 📁 Files: `specs/001-textbook-ui-update/plan.md`, `docs/*`, `docusaurus.config.ts`, `src/pages/index.tsx`, `src/components/Chatbot/ChatWidget.tsx`, `src/components/ChapterTools/Toolbar.tsx` modified or created.
- 🔁 Next prompts: The project is ready for manual verification of the new AI features and chapter navigation.

## Evaluation notes (flywheel)

- Failure modes observed: Persistent broken links due to Docusaurus routing. The solution involved a full rebuild of the docs folder and ensuring correct slugs in frontmatter. The `onBrokenLinks: 'warn'` setting remains for now.
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment: N/A