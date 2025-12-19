---
id: 0020
title: Implemented Persistent Logout Option in Navbar
stage: implement
date: 2025-12-18
surface: agent
model: gemini-1.5-pro
feature: 007-litellm-rag-backend
branch: 007-litellm-rag-backend
user: n/a
command: /sp.plan
labels: [implement, frontend, auth, ui]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - src/components/AuthNavbarItem/index.tsx
  - src/theme/NavbarItem/index.tsx
  - docusaurus.config.ts
tests:
  []
---

## Prompt

# Implementation Plan: Login Page Dashboard & Logout Logic

**Goal**: Modify `src/pages/login.js` to prevent automatic redirection for already authenticated users. Instead, display a "Logged In" state with options to navigate to chapters or logout.

## Phase 1: Logic Refactor (`src/pages/login.js`)
1. **Update `useEffect` Hook**:
   - Remove the `history.push(...)` logic inside the `onAuthStateChanged` callback.
   - The hook should ONLY update the `user` state when authentication status changes.
2. **Add Logout Function**:
   - Create a `handleLogout` function.
   - Use `signOut(auth)` from Firebase.
   - On success, set `user` state to `null` (this will automatically show the login form again).

## Phase 2: UI Updates (`src/pages/login.js`)
3. **Conditional Rendering**:
   - Wrap the main content of the `authBox` in a condition: `user ? (LoggedInView) : (LoginForm)`.
4. **Logged In View (New UI)**:
   - Display: "Welcome Back!" and the user's email (`user.email`).
   - Button 1: "Go to Chapters" (Primary Color) -> Links to `/docs/01-physical-ai/index`.
   - Button 2: "Logout" (Red/Danger Color) -> Triggers `handleLogout`.
5. **Logged Out View (Existing UI)**:
   - Keep the existing Email/Password form exactly as is.
   - Ensure it is only visible when `user` is null.

## Phase 3: Verification
6. **Action**: The user will test by logging in. They should see the dashboard. Clicking "Go to Chapters" takes them to docs. Clicking "Logout" returns them to the form.

## Response snapshot

I have successfully implemented a persistent logout option in the Docusaurus navbar.
- Created a custom `AuthNavbarItem` component (`src/components/AuthNavbarItem/index.tsx`) that conditionally renders a "Login" or "Logout" button based on the Firebase authentication status.
- Swizzled the Docusaurus `NavbarItem` component (`src/theme/NavbarItem/index.tsx`) to allow for custom navbar item types.
- Updated `docusaurus.config.ts` to use the new `custom-auth-item` type, integrating the `AuthNavbarItem` into the navbar.
- Corrected the import path for `AuthNavbarItem` within the swizzled `NavbarItem` to resolve module not found errors.
- The project builds successfully.

## Outcome

- ✅ Impact: Logged-in users now have a convenient and persistent "Logout" option in the navbar, improving the overall user experience.
- 🧪 Tests: No new tests were added.
- 📁 Files: `src/components/AuthNavbarItem/index.tsx`, `src/theme/NavbarItem/index.tsx`, `docusaurus.config.ts`
- 🔁 Next prompts: The logout functionality is now globally accessible.
- 🧠 Reflection: Swizzling Docusaurus components and correctly managing import paths for custom theme components can be intricate, but it allows for powerful customizations.

## Evaluation notes (flywheel)

- Failure modes observed: Incorrect import path for the custom navbar item.
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): n/a
