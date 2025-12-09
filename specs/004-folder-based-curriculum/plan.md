# Implementation Plan: Folder-Based Curriculum (Strict Repair)

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