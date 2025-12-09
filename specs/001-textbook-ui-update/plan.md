# Implementation Plan: Full Course Expansion

**Goal**: Re-organize docs to match the 9-Chapter Curriculum.
**Action**: Rename existing files to match new structure and create missing ones.

## Phase 1: Re-Structure & Rename
1. **Clean Slate**:
   - Delete current contents of `docs/` (Safety: We will regenerate better versions).
   
## Phase 2: Create 9 Detailed Chapters
*Instruction: Write detailed MDX files based on the Spec. Use the specific Unsplash URLs provided.*

2. **Create Core Modules**:
   - `docs/01-intro.mdx`
   - `docs/02-ros2.mdx`
   - `docs/03-digital-twins.mdx`
   - `docs/04-nvidia-isaac.mdx`

3. **Create Advanced Modules**:
   - `docs/05-humanoid-dev.mdx`
   - `docs/06-vla.mdx`
   - `docs/07-conversational.mdx`

4. **Create Final Modules**:
   - `docs/08-capstone.mdx`
   - `docs/09-hardware.mdx`

## Phase 3: Final Verification
5. **Build**:
   - Run `npm run build`.
   - Verify Sidebar shows 9 distinct chapters.