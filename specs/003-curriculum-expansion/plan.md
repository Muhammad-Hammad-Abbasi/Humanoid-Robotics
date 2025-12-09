# Implementation Plan: Full Curriculum Expansion

**Goal**: Expand the textbook from 4 chapters to 9 distinct modules to match the complete Hackathon curriculum.
**Standard**: Deep technical content (1000+ words/chapter), Real Code Examples, and High-Quality Unsplash Images.

## Phase 1: Overwrite Existing Chapters (Deep Content)

1.  **Overwrite `docs/physical-ai/introduction.mdx`**:
    *   **Visual**: Use strictly: `![Physical AI Evolution](https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1000)`
    *   **Content**: Explain Embodied Intelligence, Sensors (Lidar, IMU), Shift from GenAI to PhysAI.
    *   **Length**: 1000+ words.

2.  **Overwrite `docs/humanoid-robotics/basics.mdx`**:
    *   **Visual**: Use strictly: `![ROS 2 Nodes](https://images.unsplash.com/photo-1535378437327-1e045a3bdbe3?auto=format&fit=crop&q=80&w=1000)`
    *   **Content**: Explain Nodes, Topics, Services, Actions, `rclpy` code examples, URDF.
    *   **Length**: 1000+ words.

3.  **Overwrite `docs/robotics-algorithms/advanced.mdx`**:
    *   **Visual**: Use strictly: `![Simulation](https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80&w=1000)`
    *   **Content**: Explain Physics Simulation, Unity vs Gazebo, Importing URDFs, Environment setup.
    *   **Length**: 1000+ words.

4.  **Overwrite `docs/project-applications/index.mdx`**:
    *   **Visual**: Use strictly: `![Industrial Robot](https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000)`
    *   **Content**: Explain Isaac Sim, Isaac ROS, Gems, VSLAM, Navigation Stack (Nav2).
    *   **Length**: 1000+ words.

## Phase 2: Create New Chapters (Deep Content)

5.  **Create `docs/04-ai-robot-brain.mdx`**:
    *   **Visual**: Use strictly: `![AI Robot Brain](https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1000)`
    *   **Content**: Explain Isaac Sim, Isaac ROS, Gems, VSLAM, Navigation Stack (Nav2).
    *   **Length**: 1000+ words.

6.  **Create `docs/05-humanoid-robot-development.mdx`**:
    *   **Visual**: Use strictly: `![Humanoid Development](https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000)`
    *   **Content**: Explain Kinematics (FK/IK), Bipedal Locomotion (Walking logic), Balance Control.
    *   **Length**: 1000+ words.

7.  **Create `docs/06-vision-language-action.mdx`**:
    *   **Visual**: Use strictly: `![VLA Models](https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000)`
    *   **Content**: Explain Connecting LLMs (GPT-4) to Robot Actions, Multi-modal inputs, Transformer models in Robotics.
    *   **Length**: 1000+ words.

8.  **Create `docs/07-conversational-robotics.mdx`**:
    *   **Visual**: Use strictly: `![Conversational Robotics](https://images.unsplash.com/photo-1591453089816-0fbb971b454c?auto=format&fit=crop&q=80&w=1000)`
    *   **Content**: Explain Speech-to-Text (Whisper), Text-to-Speech, Natural Human-Robot Interaction.
    *   **Length**: 1000+ words.

9.  **Create `docs/08-capstone-autonomous-humanoid.mdx`**:
    *   **Visual**: Use strictly: `![Autonomous Humanoid](https://images.unsplash.com/photo-1565514020176-db7936fb2bb7?auto=format&fit=crop&q=80&w=1000)`
    *   **Content**: Explain The Final Project - Integrating Vision, Navigation, and Voice into one robot.
    *   **Length**: 1000+ words.

10. **Create `docs/09-hardware-requirements.mdx`**:
    *   **Visual**: Use strictly: `![Hardware Requirements](https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&q=80&w=1000)`
    *   **Content**: Explain PC Specs (RTX 4090), Edge AI (Jetson Orin Nano), RealSense Cameras, Unitree Robots.
    *   **Length**: 1000+ words.

## Phase 3: Update Course Index & Verification

11. **Update `docs/00-course-index.mdx`**:
    *   Add links to all 9 chapters in numeric order.

12. **Build & Check**:
    *   Run `npm run build` to verify all content renders correctly.