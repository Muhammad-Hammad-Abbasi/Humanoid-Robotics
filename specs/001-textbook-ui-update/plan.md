# Implementation Plan: Final UI Polish & Config

**Goal**: Fix missing Toolbar buttons, remove "Edit this page", and update GitHub links.
**Strategy**: Use Global Injection for buttons and Config updates for links.

## Phase 1: Force Toolbar Visibility (Floating UI)
1. **Re-Create Toolbar Component**:
   - **File**: `src/components/ChapterTools/Toolbar.tsx`.
   - **Style**:
     - `position: 'fixed'`
     - `bottom: '20px'`
     - `left: '20px'` (Opposite to Chatbot so they don't overlap).
     - `zIndex: 9999`.
     - `display: 'flex'`, `gap: '10px'`.
   - **Content**:
     - Button 1: "Translate to Urdu" (Blue).
     - Button 2: "Personalize" (Purple).
   - **Logic**: Simple `alert()` on click for Demo.

2. **Update Global Wrapper**:
   - **File**: `src/theme/Root.js`.
   - **Action**: Import `Toolbar` and add it alongside `ChatWidget`.
   - **Code**:
     ```javascript
     import React from 'react';
     import ChatWidget from '@site/src/components/Chatbot/ChatWidget';
     import Toolbar from '@site/src/components/ChapterTools/Toolbar';

     export default function Root({children}) {
       return (
         <>
           {children}
           <ChatWidget />
           <Toolbar />
         </>
       );
     }
     ```

## Phase 2: Configuration Updates
3. **Update `docusaurus.config.ts` (or .js)**:
   - **Task A (Remove Edit Link)**:
     - Find `editUrl` inside `presets` -> `docs`.
     - **Action**: Delete the `editUrl` line entirely (or set it to `undefined`). This removes "Edit this page" but keeps Next/Prev buttons.
   - **Task B (Update GitHub)**:
     - Find `navbar` -> `items`. Look for the GitHub link.
     - **Action**: Change `href` to `https://github.com/Muhammad-Hammad-Abbasi/Humanoid-Robotics`.

## Phase 3: Final Verification
4. **Build**:
   - Run `npm run build` to confirm everything is set for submission.