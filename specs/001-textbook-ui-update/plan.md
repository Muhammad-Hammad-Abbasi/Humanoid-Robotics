# Implementation Plan: Activate Chatbot & Toolbar with Real AI

**Goal**: Fix the Chatbot API call and implement "Real" functionality for Translate/Personalize buttons using the Gemini API.
**API Key Strategy**: The user will manually paste the key into the code after generation to ensure safety.

## Phase 1: Fix Chatbot (Correct API Logic)
1. **Overwrite `src/components/Chatbot/ChatWidget.tsx`**:
   - **Action**: Replace the entire file with a robust React component.
   - **Logic Updates**:
     - Use the correct endpoint: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=YOUR_API_KEY`
     - **Body Structure**: `{ contents: [{ parts: [{ text: userMessage }] }] }` (This is strictly required by Gemini).
     - **Error Handling**: Add `console.log` to catch errors if the API fails.
     - **UI**: Ensure the chat window scrolls automatically to the latest message.

## Phase 2: Activate Toolbar (Translate & Personalize)
2. **Overwrite `src/components/ChapterTools/Toolbar.tsx`**:
   - **Action**: Update to include a **Modal/Popup** for results.
   - **Logic**:
     - **Translate Button**:
       - Grab text from page: `document.body.innerText.substring(0, 2000)` (Limit to 2k chars to save tokens).
       - Call Gemini API with prompt: "Translate the following technical summary into Urdu: ..."
       - Show the result in a beautiful Overlay Modal.
     - **Personalize Button**:
       - Call Gemini API with prompt: "Explain this technical content like I am 5 years old: ..."
       - Show the result in the same Modal.

## Phase 3: Verification
3. **Build**:
   - Run `npm run build`.