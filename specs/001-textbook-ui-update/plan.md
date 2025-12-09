# Implementation Plan: Restructure to Folders

**Goal**: Delete flat files and recreate content in structured folders to fix navigation.

## Phase 1: Clean Slate
1. **Delete Old Flat Files**:
   - Delete all `.mdx` files directly inside `docs/` (e.g., `docs/01-intro.mdx`).
   - Keep `docs/` folder empty but existing.

## Phase 2: Create Folder Structure
*Instruction: Create the directory first, then write the index.mdx file.*

2. **Generate Modules 1-4**:
   - Create `docs/01-physical-ai/index.mdx`
   - Create `docs/02-ros2-system/index.mdx`
   - Create `docs/03-digital-twins/index.mdx`
   - Create `docs/04-nvidia-isaac/index.mdx`

3. **Generate Modules 5-9**:
   - Create `docs/05-humanoid-dev/index.mdx`
   - Create `docs/06-vla-models/index.mdx`
   - Create `docs/07-conversational/index.mdx`
   - Create `docs/08-capstone/index.mdx`
   - Create `docs/09-hardware/index.mdx`

## Phase 3: Links Update
4. **Update Navbar & Buttons**:
   - Update `docusaurus.config.ts`: Link "Chapters" to `/docs/01-physical-ai`.
   - Update `src/pages/index.tsx`: Link "Start Reading" to `/docs/01-physical-ai`.

## Phase 4: Final Verification
5. **Rebuild**:
   - Run `npm run clear`.
   - Run `npm run build`.