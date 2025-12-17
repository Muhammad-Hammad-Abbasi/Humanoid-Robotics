# Implementation Plan: Fix Chatbot API & Implement Context RAG

**Issue**: Previous API calls failed with 404. Chatbot lacks knowledge of the book.
**Solution**: Correct the API endpoint and inject page content into the prompt.

## Phase 1: Context Extraction Logic
1. **Update `src/components/Chatbot/ChatWidget.tsx`**:
   - **Add Helper Function**: `getPageContext()`
     - Logic: `return document.querySelector('main')?.innerText || '';`
     - This grabs only the main chapter text, ignoring sidebars/navbars.

## Phase 2: Fix API Call (Gemini Pro)
2. **Rewrite `handleSend` function in `ChatWidget.tsx`**:
   - **Endpoint**: Use `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`
   - **Method**: `POST`
   - **Headers**: `{'Content-Type': 'application/json'}`
   - **Prompt Engineering**:
     - Construct payload:
       ```json
       {
         "contents": [{
           "parts": [{
             "text": "Context from textbook: " + pageContext + "\n\nUser Question: " + userMessage
           }]
         }]
       }
       ```
   - **Error Handling**: Wrap in `try/catch` and alert the user if the Key is missing or invalid.

## Phase 3: Verify & Build
3. **Build**:
   - Run `npm run build` to ensure TypeScript compiles correctly.
