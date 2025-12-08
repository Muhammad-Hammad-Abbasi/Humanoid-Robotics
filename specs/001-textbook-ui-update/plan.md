# Implementation Plan: AI Textbook & Modern UI

**Branch**: `001-textbook-ui-update` | **Date**: 2025-12-08 | **Spec**: specs/001-textbook-ui-update/spec.md
**Input**: Feature specification from `/specs/001-textbook-ui-update/spec.md`

## Summary

This plan outlines the steps to develop an AI-generated Physical AI & Humanoid Robotics Textbook with a modern UI, leveraging Docusaurus and the `nano_banana` image generation tool. The primary objective is to deliver a functional Docusaurus website with a "Classical Modern" aesthetic, a promotional landing page, and four core educational chapters.

## Technical Context

**Language/Version**: JavaScript/TypeScript (Docusaurus), Python (for `nano_banana` tool interaction, content generation scripting).  
**Primary Dependencies**: Docusaurus, `nano_banana` (for image generation).  
**Storage**: Local filesystem (for MDX content, images).  
**Testing**: Docusaurus built-in testing (if applicable), manual UI/content verification.  
**Target Platform**: Web (Static site hosted on GitHub Pages).
**Project Type**: Web application (static site).
**Performance Goals**: Users can navigate from the landing page to the introduction chapter in under 2 seconds. Average load time for chapter pages under 3 seconds.
**Constraints**: All content AI-generated; specific UI/UX design (Classical Modern); strict file/folder structure; `nano_banana` for all visuals.
**Scale/Scope**: Initial release includes a landing page and 4 chapters.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

-   **I. Prime Directives (The "Must-Haves")**
    -   **AI-Generated Content Only**: The plan relies on AI for content and `nano_banana` for images. (Adheres)
    -   **Submission-First Strategy**: Focuses on Docusaurus deployment with chapters as critical path. (Adheres)
    -   **Physical AI Focus**: Content generation explicitly targets specific curriculum topics. (Adheres)
-   **II. Writing Standards (Style & Tone)**
    -   Content generation instructions align with word count, micro-summaries, simple language, and structure. (Adheres)
-   **III. Formatting & Technical Rules**
    -   **Platform**: Explicitly uses Docusaurus (Markdown/MDX). (Adheres)
    -   **File Structure**: Specifies paths for docs, images, and content. (Adheres)
    -   **Code Blocks**: Includes Python code block generation. (Adheres)
    -   **Visuals**: Mandates `nano_banana` for all visuals. (Adheres)
-   **IV. Content Quality Control**
    -   **Word Count**: Plan specifies 400-600 words per sub-chapter. (Adheres)
    -   **Fact-Check**: Assumed to be incorporated into AI content generation prompts (e.g., ROS 2 compatibility). (Adheres)
    -   **Hardware Awareness**: Assumed to be incorporated into AI content generation prompts. (Adheres)
-   **V. Architecture & workflow**
    -   The plan follows a phased approach, aligning with the constitution's workflow for initial critical phases. (Adheres)

## Project Structure

### Documentation (this feature)

```text
specs/001-textbook-ui-update/
├── plan.md              # This file (/sp.plan command output)
├── research.md          # Phase 0 output (/sp.plan command)
├── data-model.md        # Phase 1 output (/sp.plan command)
├── quickstart.md        # Phase 1 output (/sp.plan command)
├── contracts/           # Phase 1 output (/sp.plan command)
└── tasks.md             # Phase 2 output (/sp.tasks command - NOT created by /sp.plan)
```

### Source Code (repository root)
```text
# Option 2: Web application
frontend/ # This will be the Docusaurus project root
├── src/
│   ├── components/ # For custom React components like Glassmorphism cards
│   ├── pages/      # For custom pages like index.js (landing page)
│   └── css/        # For custom.css, theme styling
├── docs/           # For MDX chapters
├── static/         # For images (static/img)
├── blog/           # (To be deleted or cleared based on plan)
└── docusaurus.config.js # Main configuration
```

**Structure Decision**: The project will adopt a web application structure, with Docusaurus serving as the frontend framework. The `frontend/` directory above represents the Docusaurus project root, containing `src/`, `docs/`, `static/`, and configuration files.

## Phases

### Phase 1: Project Cleanup & UI Foundations
1.  **Clean Default Content**:
    *   Delete all files inside `docs/` (remove `intro.md`, `tutorial-basics`, etc.).
    *   Delete `blog/` folder (if not needed) or clear its content.
    *   Remove default code in `src/pages/index.js`.
2.  **Setup Classical Modern Styling**:
    *   Update `src/css/custom.css`.
    *   Import Google Fonts: Use 'Merriweather' (Serif) for headings and 'Inter' or 'Roboto' (Sans-serif) for body text.
    *   Define CSS variables for a "Paper & Ink" aesthetic (Off-white background, deep charcoal text, electric blue accent).
    *   Add utility classes for "Glassmorphism" cards to be used on the home page.
3.  **Build Landing Page (Hero Section)**:
    *   Create a new `src/pages/index.js`.
    *   **Action**: Use `nano_banana` to generate a "Hero Image" with prompt: *"Futuristic robot hand shaking human hand, oil painting style, high detail, warm lighting"*.
    *   **Structure**:
        *   **Hero**: Display the generated image, large Serif Headline ("Mastering Physical AI"), and a primary CTA button ("Start Reading") that links to `/docs/physical-ai/introduction`.
        *   **Features Grid**: Three cards summarizing the curriculum (Physical AI, Humanoids, Algorithms) using the new CSS styles.

### Phase 2: Content Generation (Context-Aware)
*Note: For each chapter, analyze the Title and Section Headings provided in the Spec to generate relevant, educational content.*

4.  **Generate Chapter 1: Introduction to Physical AI**:
    *   Create `docs/physical-ai/introduction.mdx`.
    *   **Content Logic**: Write 400-600 words strictly covering "Definition", "Historical Background", and "Core Components".
    *   **Visuals**: Use `nano_banana` to generate an image for "Evolution of AI timeline, diagram style, minimal". Embed it in the MDX.
    *   Add a "Micro Summary" at the end.
5.  **Generate Chapter 2: Humanoid Robotics Basics**:
    *   Create `docs/humanoid-robotics/basics.mdx`.
    *   **Content Logic**: Write content specifically for "Anatomy", "Sensors", and "Actuators".
    *   **Visuals**: Use `nano_banana` to generate an image for "Humanoid robot anatomy labels, schematic view, blueprint style". Embed it.
    *   **Interactive**: Add a highlighted "Hands-on Step" block.
6.  **Generate Chapter 3: Advanced Robotics Algorithms**:
    *   Create `docs/robotics-algorithms/advanced.mdx`.
    *   **Content Logic**: Focus on "Path Planning" and "Sensor Fusion". Include Python code blocks for A* algorithm or similar.
    *   **Visuals**: Use `nano_banana` to generate an image for "Path planning grid visualization, A* algorithm, heatmap style". Embed it.
7.  **Generate Chapter 4: Project Applications**:
    *   Create `docs/project-applications/index.mdx`.
    *   **Content Logic**: Focus on "Industrial Robotics" and "Future Trends".
    *   **Visuals**: Use `nano_banana` to generate an image for "Industrial robot arm assembly line, photorealistic, cinematic shot". Embed it.

### Phase 3: Final Configuration
8.  **Configure Navigation**:
    *   Update `docusaurus.config.js` to set the `sidebar` to autogenerate based on the folder structure.
    *   Ensure the Navbar links correctly to "Home" and "Docs".
9.  **Verification**:
    *   Verify that clicking "Start Reading" on Home goes to Chapter 1.
    *   Verify that all images generated by `nano_banana` are displaying correctly in their respective chapters.

## Deliverables

-   Cleaned Docusaurus project structure.
-   `src/css/custom.css` with Classical Modern styling, Google Fonts, and Glassmorphism utilities.
-   `src/pages/index.js` (landing page) with Hero Section, CTA, and Features Grid.
-   Hero image generated by `nano_banana`.
-   Four MDX chapter files (`docs/physical-ai/introduction.mdx`, `docs/humanoid-robotics/basics.mdx`, `docs/robotics-algorithms/advanced.mdx`, `docs/project-applications/index.mdx`) with AI-generated content and embedded `nano_banana` images.
-   Configured `docusaurus.config.js` for navigation.
-   `research.md` (to be generated in Phase 0).
-   `data-model.md` (to be generated in Phase 1 - likely minimal).
-   `quickstart.md` (to be generated in Phase 1).
-   `contracts/` directory (to be generated in Phase 1 - likely minimal/empty).

## Risks

-   Availability and reliability of the `nano_banana` image generation tool.
-   Quality, accuracy, and adherence to style/tone of AI-generated textual content.
-   Potential complexities in configuring Docusaurus for the "Classical Modern" UI.
-   Latency or rate limits from `nano_banana` or content AI tools affecting workflow efficiency.

## Out of Scope

-   RAG Chatbot functionality (Phase 2 in Constitution).
-   User Authentication and Personalization features (Phase 3 in Constitution).
-   Any technical integrations beyond Docusaurus and the `nano_banana` tool for image generation.

## Assumptions

-   The `nano_banana` tool will be accessible and functional for image generation.
-   The AI content generation models can produce text meeting the specified quality, style, and accuracy for a textbook.
-   Docusaurus is a suitable and flexible platform for achieving the "Classical Modern" UI and content structure.
-   Deployment to GitHub Pages will be a straightforward process for the Docusaurus site.

## Open Questions

-   None requiring immediate clarification at this stage; the plan is detailed enough to proceed.

## Notes

This plan provides a clear roadmap for the initial development of the AI-generated textbook, focusing on UI/UX and core content delivery. The phased approach ensures that critical components are addressed first, aligning with the "Submission-First Strategy" outlined in the project constitution.

## Next Steps

Proceed with Phase 0 Research (if any 'NEEDS CLARIFICATION' or specific research tasks were identified).
Proceed with Phase 1 Design and Contracts.