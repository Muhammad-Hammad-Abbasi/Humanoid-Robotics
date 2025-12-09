# Actionable Tasks: Restructure to Folders

This document outlines the sequential and parallelizable tasks required to restructure the Docusaurus documentation from flat files to a folder-based system.

## Phase 1: Setup

- [X] T001 Ensure `npm` is installed and dependencies are up to date by running `npm install` in the repository root.

## Phase 2: Foundational (Clean Slate)

This phase ensures a clean state before creating the new structure. It corresponds to User Story 1.

### User Story 1: Clean Slate

- **Goal**: Remove the old, problematic flat-file structure.
- **Independent Test**: Verify that the `docs/` directory contains no `.mdx` files directly within it after this phase.

#### Implementation Tasks

- [X] T002 [US1] Delete all existing `.mdx` files from the `docs/` directory using `Remove-Item -Path "docs/*.mdx" -Force` or an equivalent command.

## Phase 3: Content Migration & Structure Creation

This phase creates the new folder-based structure for the curriculum. It corresponds to User Story 2.

### User Story 2: Create Folder Structure

- **Goal**: Re-create all chapter content within a new, organized folder structure.
- **Independent Test**: Verify that each chapter exists in its own numbered folder (e.g., `docs/01-physical-ai/`) and contains an `index.mdx` file with the correct content.

#### Implementation Tasks

- [X] T003 [P] [US2] Create directory `docs/01-physical-ai/` and file `docs/01-physical-ai/index.mdx` with the corresponding chapter content.
- [X] T004 [P] [US2] Create directory `docs/02-ros2-system/` and file `docs/02-ros2-system/index.mdx` with the corresponding chapter content.
- [X] T005 [P] [US2] Create directory `docs/03-digital-twins/` and file `docs/03-digital-twins/index.mdx` with the corresponding chapter content.
- [X] T006 [P] [US2] Create directory `docs/04-nvidia-isaac/` and file `docs/04-nvidia-isaac/index.mdx` with the corresponding chapter content.
- [X] T007 [P] [US2] Create directory `docs/05-humanoid-dev/` and file `docs/05-humanoid-dev/index.mdx` with the corresponding chapter content.
- [X] T008 [P] [US2] Create directory `docs/06-vla-models/` and file `docs/06-vla-models/index.mdx` with the corresponding chapter content.
- [X] T009 [P] [US2] Create directory `docs/07-conversational/` and file `docs/07-conversational/index.mdx` with the corresponding chapter content.
- [X] T010 [P] [US2] Create directory `docs/08-capstone/` and file `docs/08-capstone/index.mdx` with the corresponding chapter content.
- [X] T011 [P] [US2] Create directory `docs/09-hardware/` and file `docs/09-hardware/index.mdx` with the corresponding chapter content.

## Phase 4: Link & Configuration Updates

This phase updates the site's navigation to point to the new content structure. It corresponds to User Story 3.

### User Story 3: Update Navigation Links

- **Goal**: Ensure all primary navigation elements link to the new chapter structure.
- **Independent Test**: Manually verify that the "Chapters" navbar link and the "Start Reading" homepage button navigate to the first chapter.

#### Implementation Tasks

- [X] T012 [P] [US3] Update the `navbar` and `footer` links in `docusaurus.config.ts` to point to `/docs/01-physical-ai`.
- [X] T013 [P] [US3] Update the "Start Reading" button's `to` link in `src/pages/index.tsx` to point to `/docs/01-physical-ai`.

## Phase 5: Final Verification

This phase verifies that all changes have integrated correctly and the site builds successfully. It corresponds to User Story 4.

### User Story 4: Verify Build

- **Goal**: Confirm the website builds without errors.
- **Independent Test**: The Docusaurus build command completes with exit code 0.

#### Implementation Tasks

- [X] T014 [US4] Clear the Docusaurus cache by running `npm run clear`.
- [X] T015 [US4] Build the Docusaurus project by running `npm run build`.

---

## Dependencies & Execution Strategy

### Story Dependencies

1.  **US1 (Clean Slate)** must be completed before **US2 (Create Structure)**.
2.  **US2 (Create Structure)** must be completed before **US3 (Update Links)**.
3.  **US3 (Update Links)** must be completed before **US4 (Verify Build)**.

This is a strictly sequential workflow.

### Parallel Execution Opportunities

-   Within **US2**, tasks **T003 through T011** are independent and can be executed in parallel as they involve creating different files and directories.
-   Within **US3**, tasks **T012 and T013** are independent and can be executed in parallel.

### Implementation Strategy

The strategy is a full, sequential implementation. An MVP is not applicable as all steps are required to fix the broken build.

1.  Execute all tasks in **US1**.
2.  Execute all tasks in **US2** (can be done in parallel).
3.  Execute all tasks in **US3** (can be done in parallel).
4.  Execute all tasks in **US4** to confirm success.
