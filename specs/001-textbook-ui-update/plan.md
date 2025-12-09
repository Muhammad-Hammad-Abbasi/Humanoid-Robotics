# Implementation Plan: Force Fix 404 & URLs

**Issue**: Docusaurus is auto-stripping numbering from URLs (e.g., `01-intro` becomes `intro`), breaking links.
**Goal**: Hardcode the `slug` in every file to ensure links work 100%.

## Phase 1: Force Slugs in MDX Files
*Instruction: Update the Front Matter (top section between ---) of each file. Do NOT delete the content.*

1. **Update `docs/01-intro.mdx`**:
   - Add/Update frontmatter: `slug: /01-intro`
   - Should look like:
     ```yaml
     ---
     title: Introduction to Physical AI
     slug: /01-intro
     ---
     ```

2. **Update `docs/02-ros2.mdx`**:
   - Frontmatter: `slug: /02-ros2`

3. **Update `docs/03-digital-twins.mdx`**:
   - Frontmatter: `slug: /03-digital-twins`

4. **Update `docs/04-nvidia-isaac.mdx`**:
   - Frontmatter: `slug: /04-nvidia-isaac`

5. **Update `docs/05-humanoid-dev.mdx`**:
   - Frontmatter: `slug: /05-humanoid-dev`

6. **Update `docs/06-vla.mdx`**:
   - Frontmatter: `slug: /06-vla`

7. **Update `docs/07-conversational.mdx`**:
   - Frontmatter: `slug: /07-conversational`

8. **Update `docs/08-capstone.mdx`**:
   - Frontmatter: `slug: /08-capstone`

9. **Update `docs/09-hardware.mdx`**:
   - Frontmatter: `slug: /09-hardware`

## Phase 2: Update Navigation Links
10. **Fix "Start Reading" Button**:
    - **File**: `src/pages/index.tsx` (or `.js`).
    - **Action**: Change the Link `to` prop to `/docs/01-intro` (Now that we forced the slug, this will work).

11. **Fix Navbar**:
    - **File**: `docusaurus.config.ts` (or `.js`).
    - **Action**: Ensure the "Chapters" or "Docs" link points to `/docs/01-intro`.

## Phase 3: Clean & Build
12. **Final Clean**:
    - Command: `npm run clear`
    - Command: `npm run build`