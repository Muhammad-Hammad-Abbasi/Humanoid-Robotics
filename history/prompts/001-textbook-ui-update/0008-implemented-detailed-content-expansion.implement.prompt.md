---
id: 0008
title: Implemented Detailed Content Expansion
stage: implement
date: 2025-12-08
surface: agent
model: gemini-1.5-flash-latest
feature: 001-textbook-ui-update
branch: 001-textbook-ui-update
user: user
command: /sp.plan # Implementation Plan: FORCE Detailed Content & Real Images ...
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
/sp.plan # Implementation Plan: FORCE Detailed Content & Real Images

**Goal**: OVERWRITE all chapters with deep, long-form content (1000+ words/chapter) and fix images.
**Critical Rule**: Do NOT summarize. Explain every concept like a textbook.

## Phase 1: Overwrite Chapter 1 (Physical AI)
1. **Force Write `docs/physical-ai/introduction.mdx`**:
   - **Visual**: Use strictly: `![Physical AI Evolution](https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1000)`
   - **Section 1 (The Shift)**: Explain in 3 paragraphs how AI is moving from Screens (ChatGPT) to Bodies (Robots). Discuss "Embodied Intelligence".
   - **Section 2 (Sensors Deep Dive)**: Create a specific subsection for EACH sensor:
     - **LIDAR**: Explain how light pulses measure distance.
     - **IMU**: Explain accelerometer and gyroscope (Inner ear of the robot).
     - **Depth Cameras**: Explain RGB-D (RealSense).
   - **Section 3 (Why it is Hard)**: Discuss Moravec's Paradox (Hard things are easy, easy things are hard).
   - **Micro Summary**: Add a key takeaway box.

## Phase 2: Overwrite Chapter 2 (ROS 2)
2. **Force Write `docs/humanoid-robotics/basics.mdx`**:
   - **Visual**: Use strictly: `![ROS 2 Nodes](https://images.unsplash.com/photo-1535378437327-1e045a3bdbe3?auto=format&fit=crop&q=80&w=1000)`
   - **Section 1 (Architecture)**: Detail the "Graph" structure. Explain Nodes as independent workers.
   - **Section 2 (Communication)**:
     - **Topics**: Explain Publisher/Subscriber model (Bus metaphor).
     - **Services**: Explain Request/Response model (Phone call metaphor).
   - **Section 3 (Code)**: Include a FULL Python code block for a "Hello World" Publisher node.
   - **Section 4 (URDF)**: Explain XML structure for robot links and joints.

## Phase 3: Overwrite Chapter 3 (Simulation)
3. **Force Write `docs/robotics-algorithms/advanced.mdx`**:
   - **Visual**: Use strictly: `![Simulation](https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80&w=1000)`
   - **Section 1 (The Digital Twin)**: Define why we crash robots in VR before Real Life.
   - **Section 2 (Comparison Table)**: Create a Markdown Table comparing Gazebo (Classic), Unity (Visuals), and Isaac Sim (AI Training).
   - **Section 3 (Physics)**: Explain Rigid Body Dynamics, Collision Detection, and Friction.
   - **Section 4 (Hardware)**: Explicitly list: RTX 3090/4090 requirement, 64GB RAM, Ubuntu 22.04.

## Phase 4: Overwrite Chapter 4 (Applications)
4. **Force Write `docs/project-applications/index.mdx`**:
   - **Visual**: Use strictly: `![Industrial Arm](https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000)`
   - **Section 1 (Edge Computing)**: Detail the NVIDIA Jetson Orin Nano specs and use cases.
   - **Section 2 (VLA Models)**: Explain "Vision-Language-Action". How text prompts turn into robotic arm movement.
   - **Section 3 (Sim-to-Real)**: Explain the "Reality Gap" and Domain Randomization.
   - **Section 4 (Capstone)**: Describe the final project: A robot navigating a maze using ROS 2 Nav2.

## Phase 5: Verification
5. **Build & Check**:
   - Run `npm run build`.
```

## Response snapshot

```text
The build was successful. All phases of the new implementation plan are complete.
```

## Outcome

- ✅ Impact: All chapters rewritten with detailed, long-form content.
- 🧪 Tests: Build check performed successfully.
- 📁 Files: `specs/001-textbook-ui-update/plan.md` and all chapter MDX files rewritten.
- 🔁 Next prompts: The project is in a good state for review or further feature development.

## Evaluation notes (flywheel)

- Failure modes observed: None in this phase.
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment: N/A
