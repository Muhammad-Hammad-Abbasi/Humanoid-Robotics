# Data Model: LiteLLM RAG Backend

**Date**: 2025-12-13
**Feature**: LiteLLM RAG Backend

This document outlines the data entities used in the LiteLLM RAG Backend service.

## Entities

### 1. ChatRequest

Represents an incoming chat message from a user.

**Source**: User-facing frontend (assumed).
**Storage**: In-memory, for the duration of the API request.

#### Fields

| Field | Type | Description | Constraints |
|---|---|---|---|
| `message` | `string` | The text content of the user's question. | Required, non-empty. |

#### Relationships

- **None**. This is a transient data transfer object.

#### State Transitions

- **N/A**. The entity is created at the start of a `/chat` request and destroyed upon completion.
