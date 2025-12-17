# Quickstart: Testing the LiteLLM RAG Backend

**Date**: 2025-12-13
**Feature**: LiteLLM RAG Backend

This guide provides a quick way to test the `/chat` endpoint of the backend service.

## Prerequisites

1.  The backend server is running (e.g., via `uvicorn server:app --reload`).
2.  The `ingest.py` script has been successfully run to populate the Qdrant database.
3.  You have a tool for making HTTP requests, such as `curl`.

## Testing the `/chat` Endpoint

To test the endpoint, send a `POST` request to `http://127.0.0.1:8000/chat` with a JSON payload containing your question.

### Example using `curl`

Open your terminal and run the following command:

```bash
curl -X POST "http://127.0.0.1:8000/chat" \
-H "Content-Type: application/json" \
-d '{
    "message": "What is the difference between ROS 2 Humble and Iron?"
}'
```

### Expected Response

You should receive a JSON response with the chatbot's answer. The content of the `response` will vary based on the content of the textbook documents.

```json
{
  "response": "ROS 2 Iron includes several new features and improvements over Humble, such as..."
}
```

### Testing for Errors

If you send a request with an invalid body, you should receive a `422 Unprocessable Entity` error.

**Example of an invalid request:**

```bash
curl -X POST "http://127.0.0.1:8000/chat" \
-H "Content-Type: application/json" \
-d '{
    "msg": "This is an invalid key."
}'
```
