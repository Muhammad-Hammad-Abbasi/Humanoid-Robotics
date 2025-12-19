---
id: 0025
title: Updated Homepage Features with Modules
stage: implement
date: 2025-12-18
surface: agent
model: gemini-1.5-pro
feature: 007-litellm-rag-backend
branch: 007-litellm-rag-backend
user: n/a
command: /sp.plan
labels: [implement, frontend, ui, content]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - src/components/HomepageFeatures/index.tsx
  - src/components/HomepageFeatures/styles.module.css
tests:
  []
---

## Prompt

# Implementation Plan: Update Homepage Features with All Modules

**Goal**: Replace the generic homepage cards with the actual textbook modules and chapter lists, matching the sidebar structure shown in the screenshots.

## Phase 1: Update Feature Data (`src/components/HomepageFeatures/index.js`)
1.  **Locate File**: `src/components/HomepageFeatures/index.js` (or `.tsx`).
2.  **Update `FeatureList` Array**:
    - Replace the existing dummy data with the following 5 modules:
      1.  **Module 1: Physical AI**
          - Description: "01. Introduction to Physical AI, 01. Physical AI Summary"
      2.  **Module 2: ROS 2 System**
          - Description: "02. The Robotic Nervous System (ROS 2), 02. ROS 2 System Summary"
      3.  **Module 3: Digital Twins**
          - Description: "03. Digital Twins (Gazebo & Unity), 03. Digital Twins Summary"
      2.  **Module 4: NVIDIA Isaac**
          - Description: "04. AI Robot Brain (NVIDIA Isaac), 04. NVIDIA Isaac Summary"
      3.  **Module 5: Humanoid Dev**
          - Description: "05. Humanoid Robot Development"
3.  **Refine UI**:
    - Ensure the layout uses a responsive grid (col--4) so cards wrap nicely (3 on top, 2 below).

## Phase 2: Implementation Details
4.  **Code to Insert**:
    ```javascript
    import clsx from 'clsx';
    import Heading from '@theme/Heading';
    import styles from './styles.module.css';

    const FeatureList = [
      {
        title: 'Module 1: Physical AI',
        description: (
          <>
            <ul>
              <li>01. Introduction to Physical AI</li>
              <li>01. Physical AI Summary</li>
            </ul>
          </>
        ),
      },
      {
        title: 'Module 2: ROS 2 System',
        description: (
          <>
            <ul>
              <li>02. The Robotic Nervous System (ROS 2)</li>
              <li>02. ROS 2 System Summary</li>
            </ul>
          </>
        ),
      },
      {
        title: 'Module 3: Digital Twins',
        description: (
          <>
            <ul>
              <li>03. Digital Twins (Gazebo & Unity)</li>
              <li>03. Digital Twins Summary</li>
            </ul>
          </>
        ),
      },
      {
        title: 'Module 4: NVIDIA Isaac',
        description: (
          <>
            <ul>
              <li>04. AI Robot Brain (NVIDIA Isaac)</li>
              <li>04. NVIDIA Isaac Summary</li>
            </ul>
          </>
        ),
      },
      {
        title: 'Module 5: Humanoid Dev',
        description: (
          <>
            <ul>
              <li>05. Humanoid Robot Development</li>
            </ul>
          </>
        ),
      },
    ];

    function Feature({title, description}) {
      return (
        <div className={clsx('col col--4')}>
          <div className="text--center padding-horiz--md margin-bottom--lg">
            <div className={clsx('card shadow--md', styles.featureCard)} style={{padding: '20px', height: '100%'}}> 
               <Heading as="h3">{title}</Heading>
               <div className="text--left">{description}</div>
            </div>
          </div>
        </div>
      );
    }

    export default function HomepageFeatures() {
      return (
        <section className={styles.features}>
          <div className="container">
            <div className="row" style={{justifyContent: 'center'}}>
              {FeatureList.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
      );
    }
    ```

## Phase 3: Verification
5.  **Action**: User should restart server or refresh to see 5 new cards listing all chapters.

## Response snapshot

I have successfully updated the Homepage Features component to display the textbook modules.
- The `src/components/HomepageFeatures/index.tsx` file has been updated with a `FeatureList` array containing the specific modules and their descriptions.
- The `src/components/HomepageFeatures/styles.module.css` file has been updated to include styling for `.featureCard` to add transition and box-shadow effects.
- The project builds successfully.

## Outcome

- ✅ Impact: The homepage now visually represents the textbook modules, making the content more accessible and organized for users.
- 🧪 Tests: No new tests were added.
- 📁 Files: `src/components/HomepageFeatures/index.tsx`, `src/components/HomepageFeatures/styles.module.css`
- 🔁 Next prompts: The homepage UI is now updated.
- 🧠 Reflection: This was a straightforward UI update to improve the presentation of the Docusaurus homepage.

## Evaluation notes (flywheel)

- Failure modes observed: None in this iteration.
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): n/a
