# Tasks for Feature: Folder-Based Curriculum (Strict Repair)

## Dependencies

- **User Story 1 (Navigate Repaired Curriculum)**:
  - This is a foundational user story, and other features may depend on its successful completion.

## Parallel Execution Opportunities

- Creation of individual chapter `index.mdx` files can be done in parallel, as their content is independent.

## Implementation Strategy

- **MVP Scope**: User Story 1, as it directly addresses critical routing and 404 errors, making the core curriculum accessible.
- **Incremental Delivery**: This plan focuses on a complete overhaul of the documentation structure to ensure core navigation is robust.

## Phase 1: Setup

- [x] T001 [P] Delete current contents of the `docs/` folder: `Remove-Item -Path "docs\*" -Recurse -Force`.

## Phase 2: Create 9 Detailed Chapters [US1]

**Goal**: Create all chapter folders with `index.mdx` files and correct frontmatter.

**Independent Test**: Verify that all chapter folders are created, and each `index.mdx` contains the specified frontmatter and image, and content.

- [x] T002 [P] [US1] Create directory `docs/01-physical-ai/`.
- [x] T003 [P] [US1] Create `docs/01-physical-ai/index.mdx` with "Introduction to Physical AI" content and `slug: /`.
- [x] T004 [P] [US1] Create directory `docs/02-ros2-system/`.
- [x] T005 [P] [US1] Create `docs/02-ros2-system/index.mdx` with "The Robotic Nervous System (ROS 2)" content and `slug: /`.
- [x] T006 [P] [US1] Create directory `docs/03-digital-twins/`.
- [x] T007 [P] [US1] Create `docs/03-digital-twins/index.mdx` with "Gazebo & Unity Simulation" content and `slug: /`.
- [x] T008 [P] [US1] Create directory `docs/04-nvidia-isaac/`.
- [x] T009 [P] [US1] Create `docs/04-nvidia-isaac/index.mdx` with "AI Robot Brain" content and `slug: /`.
- [x] T010 [P] [US1] Create directory `docs/05-humanoid-dev/`.
- [x] T011 [P] [US1] Create `docs/05-humanoid-dev/index.mdx` with "Humanoid Robot Development" content and `slug: /`.
- [x] T012 [P] [US1] Create directory `docs/06-vla-models/`.
- [x] T013 [P] [US1] Create `docs/06-vla-models/index.mdx` with "Vision-Language-Action" content and `slug: /`.
- [x] T014 [P] [US1] Create directory `docs/07-conversational/`.
- [x] T015 [P] [US1] Create `docs/07-conversational/index.mdx` with "Conversational Robotics" content and `slug: /`.
- [x] T016 [P] [US1] Create directory `docs/08-capstone/`.
- [x] T017 [P] [US1] Create `docs/08-capstone/index.mdx` with "Capstone Project" content and `slug: /`.
- [x] T018 [P] [US1] Create directory `docs/09-hardware/`.
- [x] T019 [P] [US1] Create `docs/09-hardware/index.mdx` with "Hardware Requirements" content and `slug: /`.

## Phase 3: Fix Links [US1]

**Goal**: Ensure all navigation links point to the correct new folder-based chapter routes.

**Independent Test**: Manually verify that clicking the "Chapters" link in the navbar and the "Start Reading" button on the homepage correctly navigate to the "Introduction to Physical AI" chapter.

- [x] T020 [US1] Update `docusaurus.config.ts` to ensure the "Chapters" item in the navbar points to `/docs/01-physical-ai`.
- [x] T021 [US1] Update `src/pages/index.tsx` to ensure the "Start Reading" button points to `/docs/01-physical-ai`.

## Phase 4: Final Build

- [x] T022 Run `npm run build` to verify the entire project compiles successfully with no broken link errors.
