---
id: 0007
title: Implemented Content Expansion & Image Fixes
stage: implement
date: 2025-12-08
surface: agent
model: gemini-1.5-flash-latest
feature: 001-textbook-ui-update
branch: 001-textbook-ui-update
user: user
command: /sp.plan # Implementation Plan: Content Expansion & Image Fixes ...
labels: ["implement", "content", "docusaurus"]
links:
  spec: specs/001-textbook-ui-update/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - specs/001-textbook-ui-update/plan.md
  - docs/physical-ai/introduction.mdx
  - docs/humanoid-robotics/basics.mdx
  - docs/robotics-algorithms/advanced.mdx
  - docs/project-applications/index.mdx
tests:

---

## Prompt

```text
/sp.plan # Implementation Plan: Content Expansion & Image Fixes

**Goal**: Rewrite all chapters to be detailed (800+ words), educational, and strictly fix all image rendering issues.
**Priority**: High (Quality Polish).

## Phase 1: Chapter Rewrite (Deep Content)
*Instruction: Overwrite existing MDX files. Do NOT summarize. Explain concepts in depth like a real teacher. Use H2 and H3 headings freely.*

1. **Rewrite Chapter 1: Introduction to Physical AI**
   - **File**: `docs/physical-ai/introduction.mdx`
   - **Content Requirements**:
     - **Section 1**: What is "Embodied Intelligence"? (Explain Digital AI vs. Physical AI).
     - **Section 2**: The Hardware Barrier (Why robots are hard).
     - **Section 3**: Sensors detailed (LIDAR, IMU, Depth Cameras - Explain how they work).
     - **Section 4**: The Future of Humanoids.
   - **Image**: Embed strictly at the top:
     `![AI History](https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1000)`

2. **Rewrite Chapter 2: The Robotic Nervous System (ROS 2)**
   - **File**: `docs/humanoid-robotics/basics.mdx`
   - **Content Requirements**:
     - **Section 1**: Why we need Middleware (The chaos of robot parts).
     - **Section 2**: ROS 2 Core Concepts (Explain Nodes, Topics, Services, and Actions in detail).
     - **Section 3**: Code Example (Write a valid `rclpy` Python script for a simple Publisher).
     - **Section 4**: URDF (Unified Robot Description Format) explained simply.
   - **Image**: Embed strictly at the top:
     `![ROS 2 Concepts](https://images.unsplash.com/photo-1535378437327-1e045a3bdbe3?auto=format&fit=crop&q=80&w=1000)`

3. **Rewrite Chapter 3: The Digital Twin (Simulation)**
   - **File**: `docs/robotics-algorithms/advanced.mdx`
   - **Content Requirements**:
     - **Section 1**: Why Simulate? (Safety, Cost, Speed).
     - **Section 2**: Gazebo vs. Unity vs. NVIDIA Isaac Sim (Comparison).
     - **Section 3**: Physics Engines (Gravity, Collision, Friction).
     - **Section 4**: Hardware Requirements (Explain why RTX GPU is needed for Isaac Sim).
   - **Image**: Embed strictly at the top:
     `![Simulation Data](https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000)`

4. **Rewrite Chapter 4: Edge AI & VLA**
   - **File**: `docs/project-applications/index.mdx`
   - **Content Requirements**:
     - **Section 1**: The Brain on the Edge (NVIDIA Jetson Orin Nano).
     - **Section 2**: VLA (Vision-Language-Action) Models. How LLMs talk to robots.
     - **Section 3**: Sim-to-Real Transfer (The challenges of moving from code to reality).
     - **Section 4**: Capstone Project Idea (Autonomous Navigation).
   - **Image**: Embed strictly at the top:
     `![Industrial Robot](https://images.unsplash.com/photo-1565514020176-db7936fb2bb7?auto=format&fit=crop&q=80&w=1000)`

## Phase 2: Navigation Check
5. **Verify Sidebar**:
   - Ensure `sidebars.js` is set to auto-generate so all new content appears automatically.

## Phase 3: Build & Finish
6. **Final Build**:
   - Run `npm run build` to verify all content renders correctly.
```

## Response snapshot

```text
The build was successful. All phases of the new implementation plan are complete.
```

## Outcome

- ✅ Impact: Content of all chapters has been expanded and improved, and all image rendering issues are resolved by using hosted images. The project is in a much more complete and polished state.
- 🧪 Tests: Build check performed successfully.
- 📁 Files: `specs/001-textbook-ui-update/plan.md` and all chapter MDX files rewritten.
- 🔁 Next prompts: The project is in a good state for review or further feature development.

## Evaluation notes (flywheel)

- Failure modes observed: None in this phase.
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment: N/A
