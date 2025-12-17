---
id: 0024
title: Generated Tasks for Folder-Based Curriculum Repair
stage: tasks
date: 2025-12-10
surface: agent
model: gemini-1.5-flash-latest
feature: 004-folder-based-curriculum
branch: 001-textbook-ui-update
user: user
command: /sp.tasks # Implementation Plan: Folder-Based Curriculum (Strict Repair) ...
labels: ["tasks", "curriculum", "docusaurus"]
links:
  spec: specs/004-folder-based-curriculum/spec.md
  plan: specs/004-folder-based-curriculum/plan.md
  ticket: null
  adr: null
  pr: null
files:
  - specs/004-folder-based-curriculum/tasks.md
tests:

---

## Prompt

```text
/sp.tasks # Implementation Plan: Folder-Based Curriculum (Strict Repair)

**Goal**: Restructure documentation into directories to fix routing/404 errors.
**Critical Rule**: Do NOT create flat files (e.g., `intro.mdx`). create FOLDERS with `index.mdx` inside them.

## Phase 1: Re-Structure & Rename
1. **Clean Slate**:
   - Delete current contents of `docs/` (Safety: We will regenerate better versions).

## Phase 2: Create 9 Detailed Chapters
*Instruction: Create these NEW files. IMPORTANT: You MUST add `slug: /` in the frontmatter of every file.*

2. **Create Core Modules**:
   - **File**: `docs/01-physical-ai/index.mdx`
     - Content: Intro to Physical AI.
     - **Frontmatter**: `slug: /`
   - **File**: `docs/02-ros2-system/index.mdx`
     - Content: ROS 2 Nodes & Topics.
     - **Frontmatter**: `slug: /`
   - **File**: `docs/03-digital-twins/index.mdx`
     - Content: Gazebo vs Unity.
     - **Frontmatter**: `slug: /`
   - **File**: `docs/04-nvidia-isaac/index.mdx`
     - Content: Isaac Sim & Gems.
     - **Frontmatter**: `slug: /`

3. **Create Advanced Modules**:
   - **File**: `docs/05-humanoid-dev/index.mdx`
     - **Frontmatter**: `slug: /`
   - **File**: `docs/06-vla-models/index.mdx`
     - **Frontmatter**: `slug: /`
   - **File**: `docs/07-conversational/index.mdx`
     - **Frontmatter**: `slug: /`

4. **Create Final Modules**:
   - **File**: `docs/08-capstone/index.mdx`
     - **Frontmatter**: `slug: /`
   - **File**: `docs/09-hardware/index.mdx`
     - **Frontmatter**: `slug: /`

## Phase 3: Fix Links
5. **Update Navbar & Buttons**:
   - **File**: `docusaurus.config.ts` (or .js).
   - **Action**: Ensure the "Chapters" item in navbar points to `/docs/01-physical-ai`.
   - **File**: `src/pages/index.tsx`.
   - **Action**: Ensure "Start Reading" button points to `/docs/01-physical-ai`.

## Phase 4: Final Build
6. **Build**:
   - Run `npm run build`.
```

## Response snapshot

```text
The `tasks.md` file has been generated.
```

## Outcome

- ✅ Impact: An actionable, dependency-ordered `tasks.md` file has been generated for the folder-based curriculum repair.
- 🧪 Tests: N/A (tasks generated, not executed yet).
- 📁 Files: `specs/004-folder-based-curriculum/tasks.md` created.
- 🔁 Next prompts: The user can now proceed with executing the tasks in `tasks.md`.

## Evaluation notes (flywheel)

- Failure modes observed: N/A
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment: N/A
