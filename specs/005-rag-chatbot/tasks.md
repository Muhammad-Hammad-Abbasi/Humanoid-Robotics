# Tasks for Feature: RAG-Style Chatbot (Client-Side)

## Dependencies

- **User Story 1 (Context-Aware Question Answering)**:
  - Depends on successful API integration and context extraction.

## Parallel Execution Opportunities

- Most tasks are sequential within the `ChatWidget.tsx` file due to direct functional dependencies.
- No significant parallel execution opportunities identified at this granularity.

## Implementation Strategy

- **MVP Scope**: Focus on User Story 1 (Context-Aware Question Answering) to deliver the core RAG chatbot functionality.
- **Incremental Delivery**: Each phase builds upon the previous one, ensuring that the chatbot's core logic is sound before final verification.

## Phase 1: Setup

- [ ] T001 Verify `src/components/Chatbot/ChatWidget.tsx` exists and is accessible.
- [ ] T002 Verify `src/components/Chatbot/styles.module.css` exists and is accessible.

## Phase 2: Context-Aware Question Answering [US1]

**Goal**: Implement the core RAG functionality: extract page context, send to Gemini API, and display response.

**Independent Test**: Verify that the chatbot's answers are directly derived from the visible page content, and that it doesn't hallucinate or provide information outside the given context.

- [ ] T003 [US1] Add `getPageContext` helper function to `src/components/Chatbot/ChatWidget.tsx` to extract `document.querySelector('main')?.innerText || ''`.
- [ ] T004 [US1] Modify `handleSend` function in `src/components/Chatbot/ChatWidget.tsx` to use the `gemini-pro` model endpoint: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`.
- [ ] T005 [US1] Update `handleSend` to set `Content-Type: application/json` header for the API request in `src/components/Chatbot/ChatWidget.tsx`.
- [ ] T006 [US1] Update `handleSend` to construct the request body with `contents: [{ parts: [{ text: "Context from textbook: " + truncatedContext + "\n\nUser Question: " + userQuestion }] }]` in `src/components/Chatbot/ChatWidget.tsx`.
- [ ] T007 [US1] Add error handling to `handleSend` function to catch API errors and alert the user if the API Key is missing or invalid in `src/components/Chatbot/ChatWidget.tsx`.
- [ ] T008 [US1] Ensure chat window automatically scrolls to the latest message (already present in current `ChatWidget.tsx`).

## Phase 3: Final Verification

- [ ] T009 Run `npm run build` to ensure TypeScript compiles correctly.
- [ ] T010 Manually verify chatbot opens/closes, accepts input, and displays responses from Gemini API.
- [ ] T011 Manually verify chatbot responses are context-aware from the current chapter content.
