# LiteLLM RAG Backend for Humanoid Robotics Textbook

This directory contains the Python backend for the Humanoid Robotics Textbook, featuring a RAG (Retrieval Augmented Generation) pipeline powered by LiteLLM, Cohere, and Qdrant.

## Setup

1.  **Initialize the Environment**:
    This project uses `uv` for package management. If you don't have it, you can install it via `pip`:
    ```bash
    pip install uv
    ```
    Then, initialize the `uv` project within the `backend` directory:
    ```bash
    uv init
    ```

2.  **Install Dependencies**:
    Install all required packages using `uv`:
    ```bash
    uv pip install fastapi uvicorn litellm python-dotenv pydantic qdrant-client cohere
    ```

3.  **Set Up Environment Variables**:
    Create a file named `.env` in this `backend` directory. Populate it with your API keys and Qdrant URL:
    ```
    GEMINI_API_KEY=your_gemini_api_key
    QDRANT_URL=your_qdrant_cloud_url
    QDRANT_API_KEY=your_qdrant_api_key
    COHERE_API_KEY=your_cohere_api_key
    ```

## Running the Backend

1.  **Run the Ingestion Script**:
    This script will process the textbook documents, create embeddings, and store them in your Qdrant database. Make sure your virtual environment is activated.
    ```bash
    uv run python ingest.py
    ```

2.  **Run the API Server**:
    This command starts the FastAPI server.
    ```bash
    uv run uvicorn server:app --reload
    ```
    The server will be available at `http://127.0.0.1:8000`.

## API Endpoint

### `POST /chat`

-   **Description**: Sends a question to the chatbot and receives a context-aware answer.
-   **Request Body**:
    ```json
    {
        "message": "Your question about robotics"
    }
    ```
-   **Response**:
    ```json
    {
        "response": "The AI's answer, grounded in the textbook's content."
    }
    ```