# Implementation Plan: EMERGENCY RESET & RE-GENERATE

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