# Tasks: AI Textbook & Modern UI

**Input**: Design documents from `/specs/001-textbook-ui-update/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md

**Tests**: Not explicitly requested in the feature specification for individual implementation tasks. Testing will be covered by verification steps in the plan and user scenarios in the spec.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story?] Description with file path`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- Paths shown below assume `frontend/` as the Docusaurus project root.

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure (Docusaurus project assumed to be already initialized)

- [x] T001 Initialize Docusaurus project in `frontend/`
- [x] T002 Clean default content in `frontend/docs/`
- [x] T003 Delete `frontend/blog/` folder if it exists

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core UI styling and Docusaurus configuration that MUST be complete before ANY user story can be implemented effectively.

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T004 Remove default code in `frontend/src/pages/index.tsx`
- [x] T005 [P] Define CSS variables for "Paper & Ink" aesthetic in `frontend/src/css/custom.css`
- [x] T006 [P] Add utility classes for "Glassmorphism" cards in `frontend/src/css/custom.css`

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - View Landing Page (P1) 🎯 MVP

**Goal**: Deliver a fully functional and styled landing page, serving as the primary entry point.

**Independent Test**: Navigate to the root URL `/` and verify the "Classical Modern" design, hero image, call-to-action button, and features grid. Verify clicking "Start Reading" navigates to `/docs/physical-ai/introduction`.

### Implementation for User Story 1

- [x] T007 Create new `frontend/src/pages/index.tsx` for the landing page
- [x] T008 Generate Hero Image using `nano_banana` with prompt: *"Futuristic robot hand shaking human hand, oil painting style, high detail, warm lighting"*. Store in `frontend/static/img/hero-image.png`.
- [x] T009 [US1] Implement Hero section in `frontend/src/pages/index.tsx` displaying hero image, headline ("Mastering Physical AI"), and CTA button ("Start Reading" linking to `/docs/physical-ai/introduction`)
- [x] T010 [US1] Implement 3-column Features Grid in `frontend/src/pages/index.tsx` summarizing curriculum topics (Physical AI, Humanoids, Algorithms) using new CSS styles

**Checkpoint**: At this point, User Story 1 (Landing Page) should be fully functional and testable independently.

---

## Phase 4: User Story 2 - Read Chapter Content (P1)

**Goal**: Generate and integrate the first four AI-driven textbook chapters.

**Independent Test**: Navigate to each chapter's defined route (`/docs/physical-ai/introduction`, etc.) and verify the presence of AI-generated content (400-600 words, micro-summaries), embedded `nano_banana` images, and proper code block syntax highlighting.

### Implementation for User Story 2

- [x] T011 Generate image for Chapter 1 using `nano_banana` with prompt: *"Evolution of AI timeline, diagram style, minimal"*. Store in `frontend/static/img/chapter1-ai-timeline.png`.
- [x] T012 [US2] Create `frontend/docs/physical-ai/introduction.mdx` with AI-generated content (400-600 words on "Definition", "Historical Background", "Core Components") and embedded image `frontend/static/img/chapter1-ai-timeline.png`. Add micro-summary.
- [x] T013 Generate image for Chapter 2 using `nano_banana` with prompt: *"Humanoid robot anatomy labels, schematic view, blueprint style"*. Store in `frontend/static/img/chapter2-humanoid-anatomy.png`.
- [x] T014 [US2] Create `frontend/docs/humanoid-robotics/basics.mdx` with AI-generated content ("Anatomy", "Sensors", "Actuators"), embedded image `frontend/static/img/chapter2-humanoid-anatomy.png`, and a "Hands-on Step" block.
- [x] T015 Generate image for Chapter 3 using `nano_banana` with prompt: *"Path planning grid visualization, A* algorithm, heatmap style"*. Store in `frontend/static/img/chapter3-path-planning.png`.
- [x] T016 [US2] Create `frontend/docs/robotics-algorithms/advanced.mdx` with AI-generated content ("Path Planning", "Sensor Fusion"), embedded image `frontend/static/img/chapter3-path-planning.png`, and Python code blocks (A* algorithm or similar).
- [x] T017 Generate image for Chapter 4 using `nano_banana` with prompt: *"Industrial robot arm assembly line, photorealistic, cinematic shot"*. Store in `frontend/static/img/chapter4-industrial-robot.png`.
- [x] T018 [US2] Create `frontend/docs/project-applications/index.mdx` with AI-generated content ("Industrial Robotics", "Future Trends") and embedded image `frontend/static/img/chapter4-industrial-robot.png`.

**Checkpoint**: At this point, User Story 2 (Chapter Content) should be fully functional and testable independently, assuming User Story 1 is also functional.

---

## Phase 5: User Story 3 - Navigate Textbook (P2)

**Goal**: Ensure seamless navigation throughout the textbook website.

**Independent Test**: Verify the correct functionality of the Navbar links (Home, Chapters, GitHub) and the conditional visibility and operation of the Sidebar on documentation pages.

### Implementation for User Story 3

- [x] T019 Update `frontend/docusaurus.config.ts` to configure Navbar links (Logo, Home, Chapters, GitHub).
- [x] T020 [US3] Update `frontend/docusaurus.config.ts` to set the sidebar to autogenerate based on the `frontend/docs/` folder structure.
- [x] T021 [US3] Verify navigation from Home to Chapter 1 works as expected.
- [x] T022 [US3] Verify Navbar links work correctly.
- [x] T023 [US3] Verify Sidebar is visible on documentation pages and hidden on the Home page.

**Checkpoint**: All user stories should now be independently functional.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Overall verification and final adjustments for release.

- [ ] T024 Final verification: Check all `nano_banana` generated images are displaying correctly.
- [ ] T025 Final verification: Ensure all code examples within chapters use correct syntax highlighting.
- [ ] T026 Final verification: Check all links and routes for correctness.
- [ ] T027 Code cleanup and refactoring in `frontend/src/` and `frontend/docs/`.
- [ ] T028 Update `frontend/README.md` with instructions on how to run the Docusaurus project.

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately.
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories.
- **User Stories (Phase 3+)**: All depend on Foundational phase completion.
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2 → P3).
- **Polish (Final Phase)**: Depends on all desired user stories being complete.

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories.
- **User Story 2 (P1)**: Can start after Foundational (Phase 2) - Integrates with US1 (via landing page link to Chapter 1).
- **User Story 3 (P2)**: Can start after Foundational (Phase 2) - Integrates with US1 and US2 for overall navigation.

### Within Each User Story

- Content generation for each chapter depends on `nano_banana` image generation.
- UI implementation for landing page depends on styling setup.

### Parallel Opportunities

- T004, T005, T006 can run in parallel (within Phase 2).
- T008, T011, T013, T015, T017 (all image generation tasks) can run in parallel.
- User Story 1 (T007-T010) and User Story 2 (T012, T014, T016, T018) can conceptually run in parallel after foundational setup, though US2 requires US1's navigation to be functional for full integration.
- T019, T020 (Docusaurus config) and T021-T023 (verification) can be done efficiently in sequence.

---

## Implementation Strategy

### MVP First (User Story 1 + Critical Content)

1.  Complete Phase 1: Setup
2.  Complete Phase 2: Foundational
3.  Complete Phase 3: User Story 1 (Landing Page)
4.  Complete User Story 2 (Chapter Content) for Chapter 1 only.
5.  **STOP and VALIDATE**: Test User Story 1 and Chapter 1 independently.
6.  Deploy/demo if ready.

### Incremental Delivery

1.  Complete Setup + Foundational → Foundation ready
2.  Add User Story 1 (Landing Page) → Test independently → Deploy/Demo (MVP!)
3.  Add User Story 2 (Chapters) incrementally (e.g., one chapter at a time) → Test independently → Deploy/Demo
4.  Add User Story 3 (Navigation) → Test independently → Deploy/Demo
5.  Each increment adds value without breaking previous functionalities.

### Parallel Team Strategy

With multiple developers:

1.  Team completes Setup + Foundational together.
2.  Once Foundational is done:
    *   Developer A: User Story 1 (Landing Page)
    *   Developer B: User Story 2 (Chapter Content - can be split by chapter)
    *   Developer C: User Story 3 (Navigation) and Polish tasks.
3.  Stories complete and integrate independently.

---

## Notes

-   [P] tasks = different files, no dependencies
-   [Story] label maps task to specific user story for traceability
-   Each user story should be independently completable and testable
-   Verify tests fail before implementing (if tests were requested for implementation)
-   Commit after each task or logical group
-   Stop at any checkpoint to validate story independently
-   Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence
