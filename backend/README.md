# Backend for Humanoid Robotics Textbook

This directory contains the Python backend for the Humanoid Robotics Textbook, including a RAG pipeline for answering questions.

## Setup

1.  **Create a virtual environment:**
    - If you are using a tool like `uv`, you can run `uv init`.
    - Otherwise, you can use Python's built-in `venv` module:
      ```bash
      python -m venv .venv
      ```

2.  **Activate the virtual environment:**
    - On Windows:
      ```bash
      .venv\Scripts\activate
      ```
    - On macOS and Linux:
      ```bash
      source .venv/bin/activate
      ```

3.  **Install dependencies:**
    - If you are using `uv`:
        ```bash
        uv pip sync
        ```
    - Otherwise, with `pip`:
        ```bash
        pip install fastapi uvicorn qdrant-client cohere openai python-dotenv
        ```
    

4.  **Set up environment variables:**
    - Create a file named `.env` in this `backend` directory.
    - Add your API keys and Qdrant URL to the `.env` file:
      ```
      COHERE_API_KEY=your_cohere_api_key
      QDRANT_URL=your_qdrant_url
      QDRANT_API_KEY=your_qdrant_api_key
      OPENAI_API_KEY=your_openai_api_key
      ```

## Running the Backend

1.  **Run the ingestion script:**
    - This script will load the documents from the `docs` directory, embed them, and store them in your Qdrant database.
    - Make sure your virtual environment is activated.
      ```bash
      python ingest.py
      ```

2.  **Run the API server:**
    - This will start the FastAPI server.
    - Make sure your virtual environment is activated.
      ```bash
      uvicorn server:app --reload
      ```
    - The server will be running at `http://127.0.0.1:8000`.

## API Endpoint

-   **POST /chat**
    -   **Request body:**
        ```json
        {
            "message": "Your question about robotics"
        }
        ```
    -   **Response:**
        ```json
        {
            "response": "The AI's answer to your question."
        }
        ```
