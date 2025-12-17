# Feature Specification: RAG-Style Chatbot (Client-Side)

**Feature Branch**: `001-textbook-ui-update` (Keep on this branch)
**Created**: 2025-12-10
**Status**: Draft
**Input**: User description: "# Feature Specification: RAG-Style Chatbot (Client-Side) **Goal**: Implement a Chatbot that answers questions based on the textbook content (RAG behavior) using Google Gemini API. **Priority**: Critical (Hackathon Requirement). **Tech Stack**: TypeScript (React), Gemini API. ## 1. Functional Requirements - **Context Awareness**: When a user asks a question, the chatbot must retrieve the text content of the currently visible chapter. - **System Prompt**: The AI must be instructed: \"You are an expert tutor for this Physical AI textbook. Answer the user's question using ONLY the context provided below.\" - **API Integration**: Fix the `404` error by using the stable `gemini-pro` model and correct HTTP methods. ## 2. Technical Implementation - **File**: `src/components/Chatbot/ChatWidget.tsx` - **Logic flow**: 1. User types \"What is ROS 2?\" 2. Code grabs `document.body.innerText` (The book content). 3. Code truncates text to ~3000 chars (to fit token limits). 4. Request sent to Gemini: `Context: [Book Text]... Question: What is ROS 2?` 5. Display response. ## 3. Success Criteria - Chatbot opens and closes. - API returns a valid response (No 404). - Answers are specific to the text on the screen (proving RAG behavior)."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Context-Aware Question Answering (Priority: P1)

As a learner, I want to ask questions about the current chapter content to a chatbot and receive accurate, context-specific answers, so that I can quickly clarify concepts and deepen my understanding.

**Why this priority**: This implements the core RAG functionality, making the chatbot a powerful learning tool.

**Independent Test**: Verify that the chatbot's answers are directly derived from the visible page content, and that it doesn't hallucinate or provide information outside the given context.

**Acceptance Scenarios**:
1.  **Given** I am viewing a chapter (e.g., "02. Robotic Nervous System (ROS 2)"), **When** I open the chatbot and ask "What are ROS 2 topics?", **Then** the chatbot responds with an explanation of ROS 2 topics based on the text of the current page.
2.  **Given** I am viewing a chapter (e.g., "01. Introduction to Physical AI"), **When** I ask a question about ROS 2 topics, **Then** the chatbot states it cannot answer the question based on the current context or provides a general answer not specific to ROS 2 (if it correctly identifies ROS 2 is not in context).
3.  **Given** the chatbot is open, **When** the page content changes (e.g., I navigate to a new chapter), **Then** subsequent chatbot responses are based on the new page's content.

## Requirements *(mandatory)*

### Functional Requirements

-   **FR-001**: The chatbot MUST extract the `innerText` of the currently visible document body as context for API calls.
-   **FR-002**: The extracted text context MUST be truncated to approximately 3000 characters to fit within API token limits.
-   **FR-003**: The Gemini API request MUST include a system instruction: "You are an expert tutor for this Physical AI textbook. Answer the user's question using ONLY the context provided below."
-   **FR-004**: The Gemini API request MUST use the `gemini-pro` model.
-   **FR-005**: The Gemini API request MUST use the correct HTTP method (`POST`) and body structure.
-   **FR-006**: The chatbot MUST display the API's response in the chat window.
-   **FR-007**: The chatbot MUST open and close correctly.
-   **FR-008**: The API calls MUST handle network errors and display a user-friendly message.

## Success Criteria *(mandatory)*

### Measurable Outcomes

-   **SC-001**: The chatbot successfully makes API calls to `gemini-pro` without `404` errors.
-   **SC-002**: Chatbot responses consistently reflect the content of the currently displayed chapter, demonstrating RAG behavior.
-   **SC-003**: Chatbot answers are concise and directly address the user's question, adhering to the system prompt.
-   **SC-004**: The chatbot UI (open/close, message display, input) functions as expected.
