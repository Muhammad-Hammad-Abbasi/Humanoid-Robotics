---
id: 0022
title: Implemented Signup to Login Flow
stage: implement
date: 2025-12-18
surface: agent
model: gemini-1.5-pro
feature: 007-litellm-rag-backend
branch: 007-litellm-rag-backend
user: n/a
command: /sp.plan
labels: [implement, frontend, auth, flow]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - src/theme/Root.tsx
  - src/pages/signup.tsx
tests:
  []
---

## Prompt

# Implementation Plan: Enforce Signup -> Login Flow

**Goal**: ensure the user is redirected to the `/login` page after signing up, and prevent `Root.js` from automatically forwarding logged-in users from `/login` to `/docs`.

## Phase 1: Relax Root Guard (`src/theme/Root.js`)
1.  **Remove Forwarding Logic**:
    - Locate the block:
      ```javascript
      if (user && isAuthRoute) {
        history.push('/docs/01-physical-ai');
      }
      ```
    - **Action**: **DELETE** this entire block.
    - **Reason**: We want logged-in users to be able to see the `/login` page (which now acts as a User Dashboard), instead of forcing them to the chapters.

## Phase 2: Update Signup Logic (`src/pages/signup.js`)
2.  **Verify Redirect**:
    - Inside `handleSignup`, ensure the success action is:
      ```javascript
      history.push('/login');
      ```
    - (Ensure it does NOT redirect to `/docs` or `/`).

## Phase 3: Verification
3.  **Expected Behavior**:
    - User fills Signup Form -> Clicks Signup.
    - Firebase creates account & logs in.
    - User is sent to `/login`.
    - User stays on `/login` and sees "Welcome Back" (because they are logged in).
    - They do NOT get auto-redirected to chapters.

## Response snapshot

I have successfully implemented the Signup to Login flow.
- The automatic forwarding logic for logged-in users from authentication pages to the docs has been removed from `src/theme/Root.tsx`.
- The `signup.tsx` page correctly redirects to the `/login` page after successful signup.

## Outcome

- ✅ Impact: Logged-in users can now access their dashboard on the `/login` page without being automatically redirected, and new users are guided through the correct authentication flow.
- 🧪 Tests: No new tests were added.
- 📁 Files: `src/theme/Root.tsx`, `src/pages/signup.tsx`
- 🔁 Next prompts: The authentication flow is now as intended.
- 🧠 Reflection: Ensuring correct redirect logic and respecting user navigation intent are crucial for a good user experience in authentication flows.

## Evaluation notes (flywheel)

- Failure modes observed: None in this iteration.
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): n/a
