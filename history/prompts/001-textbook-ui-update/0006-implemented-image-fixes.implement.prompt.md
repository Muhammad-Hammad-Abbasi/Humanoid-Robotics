---
id: 0006
title: Implemented Image Fixes
stage: implement
date: 2025-12-08
surface: agent
model: gemini-1.5-flash-latest
feature: 001-textbook-ui-update
branch: 001-textbook-ui-update
user: user
command: /sp.plan # Implementation Plan: Switch to Hosted Images (Unsplash) **Issue**: The AI cannot generate local binary image files, creating corrupt placeholders. **Solution**: Use high-quality, royalty-free hosted images (Unsplash) directly in the MDX files. ## Phase 1: Update MDX with Real Image URLs *Instruction: Open each MDX file and REPLACE the local image path (e.g., `![](/img/x.png)`) with the specific HTTPS URL provided below.* 1.  **Update Homepage Hero Image**: - **File**: `src/pages/index.js` (or wherever the Hero image is defined). - **Action**: Change the hero image source to: `https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1600` *(This is a high-quality Robot Hand image).* 2.  **Update Chapter 1 (Intro)**: - **File**: `docs/physical-ai/introduction.mdx` (or similar). - **Action**: Replace the image markdown with: `![AI History](https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1000)` 3.  **Update Chapter 2 (Humanoid Basics)**: - **File**: `docs/humanoid-robotics/basics.mdx`. - **Action**: Replace the image markdown with: `![Humanoid Robot](https://images.unsplash.com/photo-1535378437327-1e045a3bdbe3?auto=format&fit=crop&q=80&w=1000)` 4.  **Update Chapter 3 (Algorithms)**: - **File**: `docs/robotics-algorithms/advanced.mdx`. - **Action**: Replace the image markdown with: `![Algorithms Data](https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000)` 5.  **Update Chapter 4 (Applications)**: - **File**: `docs/project-applications/index.mdx`. - **Action**: Replace the image markdown with: `![Industrial Arm](https://images.unsplash.com/photo-1565514020176-db7936fb2bb7?auto=format&fit=crop&q=80&w=1000)` ## Phase 2: Final Verification 6.  **Build Check**: - Run `npm run build` to ensure the site builds with these remote URLs.
labels: ["implement", "images", "docusaurus"]
links:
  spec: specs/001-textbook-ui-update/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - specs/001-textbook-ui-update/plan.md
  - src/pages/index.tsx
  - docs/physical-ai/introduction.mdx
  - docs/humanoid-robotics/basics.mdx
  - docs/robotics-algorithms/advanced.mdx
  - docs/project-applications/index.mdx
tests:

---

## Prompt

```text
/sp.plan # Implementation Plan: Switch to Hosted Images (Unsplash)

**Issue**: The AI cannot generate local binary image files, creating corrupt placeholders.
**Solution**: Use high-quality, royalty-free hosted images (Unsplash) directly in the MDX files.

## Phase 1: Update MDX with Real Image URLs
*Instruction: Open each MDX file and REPLACE the local image path (e.g., `![](/img/x.png)`) with the specific HTTPS URL provided below.*

1.  **Update Homepage Hero Image**:
    - **File**: `src/pages/index.js` (or wherever the Hero image is defined).
    - **Action**: Change the hero image source to:
      `https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1600`
      *(This is a high-quality Robot Hand image).*

2.  **Update Chapter 1 (Intro)**:
    - **File**: `docs/physical-ai/introduction.mdx` (or similar).
    - **Action**: Replace the image markdown with:
      `![AI History](https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1000)`

3.  **Update Chapter 2 (Humanoid Basics)**:
    - **File**: `docs/humanoid-robotics/basics.mdx`.
    - **Action**: Replace the image markdown with:
      `![Humanoid Robot](https://images.unsplash.com/photo-1535378437327-1e045a3bdbe3?auto=format&fit=crop&q=80&w=1000)`

4.  **Update Chapter 3 (Algorithms)**:
    - **File**: `docs/robotics-algorithms/advanced.mdx`.
    - **Action**: Replace the image markdown with:
      `![Algorithms Data](https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000)`

5.  **Update Chapter 4 (Applications)**:
    - **File**: `docs/project-applications/index.mdx`.
    - **Action**: Replace the image markdown with:
      `![Industrial Arm](https://images.unsplash.com/photo-1565514020176-db7936fb2bb7?auto=format&fit=crop&q=80&w=1000)`

## Phase 2: Final Verification
6.  **Build Check**:
    - Run `npm run build` to ensure the site builds with these remote URLs.
```

## Response snapshot

```text
The build was successful. All phases of the new implementation plan are complete.
```

## Outcome

- ✅ Impact: Image generation issue resolved by switching to hosted images. Build successful.
- 🧪 Tests: Build check performed successfully.
- 📁 Files: `specs/001-textbook-ui-update/plan.md`, `src/pages/index.tsx`, `docs/physical-ai/introduction.mdx`, `docs/humanoid-robotics/basics.mdx`, `docs/robotics-algorithms/advanced.mdx`, `docs/project-applications/index.mdx` modified. Old local image files deleted.
- 🔁 Next prompts: The user can now verify the implementation by running the Docusaurus project and checking the UI/UX and content.

## Evaluation notes (flywheel)

- Failure modes observed: Build failed with previous local placeholders due to invalid image formats. Resolved by switching to hosted URLs.
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment: N/A
