# Implementation Plan: Direct Injection (Same Branch)

**Goal**: Create React components in the current folder structure.
**Branch**: 001-textbook-ui-update (Stay Here).

## Phase 1: Create Files (No Git Switching)
1. **Create Chat Widget**:
   - Create `src/components/Chatbot/ChatWidget.tsx`.
   - Code: Simple React component with fixed position.

2. **Create Login Page**:
   - Create `src/pages/login.tsx`.
   - Code: Simple Form.

3. **Create Toolbar**:
   - Create `src/components/ChapterTools/Toolbar.tsx`.
   - Code: Translate/Personalize buttons with Alerts.

## Phase 2: Integration
4. **Register Global Wrapper**:
   - Create `src/theme/Root.js`.
   - Logic: Import ChatWidget and wrap children.

5. **Update Navbar**:
   - Modify `docusaurus.config.ts` (or `.js`) to add the Login link.

## Phase 3: Build
6. **Final Check**:
   - Run `npm run build`.