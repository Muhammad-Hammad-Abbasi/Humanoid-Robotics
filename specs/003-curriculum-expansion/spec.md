# Feature Specification: Full Curriculum Expansion (The "Pro" Version)

**Feature Branch**: `001-textbook-ui-update`  
**Created**: 2025-12-09  
**Status**: Draft  
**Input**: User description: "# Feature Specification: Full Curriculum Expansion (The "Pro" Version) **Goal**: Expand the textbook from 4 chapters to 9 distinct modules to match the complete Hackathon curriculum. **Standard**: Deep technical content (1000+ words/chapter), Real Code Examples, and High-Quality Unsplash Images. ## 1. Chapter Structure (Targeting 9 Items in Sidebar) *Note: Create these strictly in `docs/` with numeric prefixes to sort them correctly (e.g., `01-intro.mdx`).* ### 01. Introduction to Physical AI - **Topics**: Embodied Intelligence, Sensors (Lidar, IMU), The Shift from GenAI to PhysAI. - **Image**: `https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1000` ### 02. Robotic Nervous System (ROS 2) - **Topics**: Nodes, Topics, Services, Actions, `rclpy` code examples, URDF. - **Image**: `https://images.unsplash.com/photo-1535378437327-1e045a3bdbe3?auto=format&fit=crop&q=80&w=1000` ### 03. Digital Twins (Gazebo & Unity) - **Topics**: Physics Simulation, Unity vs Gazebo, Importing URDFs, Environment setup. - **Image**: `https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80&w=1000` ### 04. AI Robot Brain (NVIDIA Isaac) - **Topics**: Isaac Sim, Isaac ROS, Gems, VSLAM, Navigation Stack (Nav2). - **Image**: `https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1000` ### 05. Humanoid Robot Development - **Topics**: Kinematics (FK/IK), Bipedal Locomotion (Walking logic), Balance Control. - **Image**: `https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000` ### 06. Vision-Language-Action (VLA) - **Topics**: Connecting LLMs (GPT-4) to Robot Actions, Multi-modal inputs, Transformer models in Robotics. - **Image**: `https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000` ### 07. Conversational Robotics - **Topics**: Speech-to-Text (Whisper), Text-to-Speech, Natural Human-Robot Interaction. - **Image**: `https://images.unsplash.com/photo-1591453089816-0fbb971b454c?auto=format&fit=crop&q=80&w=1000` ### 08. Capstone: Autonomous Humanoid - **Topics**: The Final Project - Integrating Vision, Navigation, and Voice into one robot. - **Image**: `https://images.unsplash.com/photo-1565514020176-db7936fb2bb7?auto=format&fit=crop&q=80&w=1000` ### 09. Hardware Requirements - **Topics**: PC Specs (RTX 4090), Edge AI (Jetson Orin Nano), RealSense Cameras, Unitree Robots. - **Image**: `https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&q=80&w=1000` ## 2. Content Quality Rules - **No Summary**: Do not write short summaries. Write full tutorials. - **Code**: Every technical chapter MUST have a code block (Python/C++). - **Images**: Use the provided Unsplash Links ONLY. Do not generate fake local paths."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Access Full Curriculum (Priority: P1)

As a learner, I want to access a comprehensive curriculum of 9 distinct modules on Physical AI & Humanoid Robotics, so that I can gain in-depth knowledge and skills in the field.

**Why this priority**: Expanding the curriculum is the core goal of this feature, providing significantly more educational content.

**Independent Test**: Verify that all 9 new chapter entries appear in the sidebar navigation, and each chapter page is accessible and displays content as specified.

**Acceptance Scenarios**:
1.  **Given** I am on the textbook website, **When** I view the sidebar, **Then** I see 9 distinct chapter entries, ordered numerically from "01. Introduction to Physical AI" to "09. Hardware Requirements".
2.  **Given** I click on any of the 9 chapter entries in the sidebar, **When** the page loads, **Then** I see the chapter content, which is long-form (1000+ words), educational, includes code examples where relevant, and displays the specified Unsplash image at the top.

### User Story 2 - Deep Dive into Technical Concepts (Priority: P1)

As a student, I want to explore advanced technical concepts with real code examples and detailed explanations, so that I can understand the practical implementation of Physical AI and Robotics.

**Why this priority**: This directly addresses the "Deep technical content" and "Real Code Examples" standard.

**Independent Test**: For each technical chapter, verify the presence of at least one relevant code block (Python/C++) and detailed explanations of the topics.

**Acceptance Scenarios**:
1.  **Given** I am viewing a technical chapter (e.g., "02. Robotic Nervous System (ROS 2)"), **When** I read through the content, **Then** I find detailed explanations of core concepts (e.g., Nodes, Topics, Services, Actions for ROS 2).
2.  **Given** I am viewing a technical chapter, **When** I encounter a code block, **Then** the code is a full, valid example (e.g., `rclpy` Python script) and includes proper syntax highlighting.
3.  **Given** I am viewing any chapter, **When** I see an image, **Then** the image is loaded from the specified Unsplash URL.

## Requirements *(mandatory)*

### Functional Requirements

-   **FR-001**: The textbook MUST be expanded to include 9 distinct modules/chapters.
-   **FR-002**: Each chapter MUST contain deep technical content, exceeding 1000 words.
-   **FR-003**: Chapters MUST include real code examples (Python/C++) where appropriate for technical topics.
-   **FR-004**: Chapters MUST use high-quality Unsplash images, specified by URL.
-   **FR-005**: Chapters MUST be created in the `docs/` directory with numeric prefixes (e.g., `01-intro.mdx`).
-   **FR-006**: Chapter "01. Introduction to Physical AI" MUST cover Embodied Intelligence, Sensors (Lidar, IMU), and the Shift from GenAI to PhysAI, and use the image `https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1000`.
-   **FR-007**: Chapter "02. Robotic Nervous System (ROS 2)" MUST cover Nodes, Topics, Services, Actions, `rclpy` code examples, and URDF, and use the image `https://images.unsplash.com/photo-1535378437327-1e045a3bdbe3?auto=format&fit=crop&q=80&w=1000`.
-   **FR-008**: Chapter "03. Digital Twins (Gazebo & Unity)" MUST cover Physics Simulation, Unity vs Gazebo, Importing URDFs, and Environment setup, and use the image `https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80&w=1000`.
-   **FR-009**: Chapter "04. AI Robot Brain (NVIDIA Isaac)" MUST cover Isaac Sim, Isaac ROS, Gems, VSLAM, and Navigation Stack (Nav2), and use the image `https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1000`.
-   **FR-010**: Chapter "05. Humanoid Robot Development" MUST cover Kinematics (FK/IK), Bipedal Locomotion (Walking logic), and Balance Control, and use the image `https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000`.
-   **FR-011**: Chapter "06. Vision-Language-Action (VLA)" MUST cover Connecting LLMs (GPT-4) to Robot Actions, Multi-modal inputs, and Transformer models in Robotics, and use the image `https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000`.
-   **FR-012**: Chapter "07. Conversational Robotics" MUST cover Speech-to-Text (Whisper), Text-to-Speech, and Natural Human-Robot Interaction, and use the image `https://images.unsplash.com/photo-1591453089816-0fbb971b454c?auto=format&fit=crop&q=80&w=1000`.
-   **FR-013**: Chapter "08. Capstone: Autonomous Humanoid" MUST cover The Final Project - Integrating Vision, Navigation, and Voice into one robot, and use the image `https://images.unsplash.com/photo-1565514020176-db7936fb2bb7?auto=format&fit=crop&q=80&w=1000`.
-   **FR-014**: Chapter "09. Hardware Requirements" MUST cover PC Specs (RTX 4090), Edge AI (Jetson Orin Nano), RealSense Cameras, and Unitree Robots, and use the image `https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&q=80&w=1000`.
-   **FR-015**: No chapter content MUST be a short summary; all content MUST be full tutorials.
-   **FR-016**: Every technical chapter MUST have at least one code block (Python/C++).
-   **FR-017**: Only the provided Unsplash image links MUST be used; no fake local paths.

### Key Entities *(include if feature involves data)*

-   **Chapter**: Represents a distinct module in the textbook, with detailed content, code examples, and a specific image.

## Success Criteria *(mandatory)*

### Measurable Outcomes

-   **SC-001**: All 9 specified chapters are accessible via the sidebar and display their respective content and Unsplash images.
-   **SC-002**: Each of the 9 chapters contains content exceeding 1000 words.
-   **SC-003**: Technical chapters (02, 03, 04, 05, 06, 07, 08, 09) include at least one relevant code block with proper syntax highlighting.
-   **SC-004**: All images in the chapters are loaded from the specified Unsplash URLs.
-   **SC-005**: The sidebar correctly displays all 9 chapters in numeric order.
