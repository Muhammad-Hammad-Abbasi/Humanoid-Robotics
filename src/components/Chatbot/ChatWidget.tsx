import React, { useState, useRef, useEffect } from 'react';
import styles from './styles.module.css';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const getPageContext = () => {
    // Select the main content area of the Docusaurus page
    const mainContent = document.querySelector('main');
    return mainContent?.innerText || '';
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen && messages.length === 0) {
      setMessages([{ text: 'Hello! How can I help you learn about robotics today?', sender: 'bot' }]);
    }
  };

  const handleSend = async () => {
    if (input.trim() === '') return;

    const userQuestion = input;
    const userMessage = { text: userQuestion, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    const apiKey = 'AIzaSyAFFBWFtxWFYXnZkNlDkh2G_pEadZiSrBI'; // Replace with your actual Gemini API key
    if (apiKey === 'AIzaSyAFFBWFtxWFYXnZkNlDkh2G_pEadZiSrBI' || !apiKey) {
      alert('Please replace "YOUR_GEMINI_KEY" with your actual Gemini API key in src/components/Chatbot/ChatWidget.tsx');
      const errorMessage = { text: 'API Key is missing or invalid. Please update `src/components/Chatbot/ChatWidget.tsx`.', sender: 'bot' };
      setMessages((prev) => [...prev, errorMessage]);
      return;
    }

    const pageContext = getPageContext();
    const truncatedContext = pageContext.substring(0, 3000); // Truncate to ~3000 characters

    const promptText = `Context from textbook: ${truncatedContext}\n\nUser Question: ${userQuestion}`;

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: promptText }] }],
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Gemini API Error:', errorData);
        throw new Error(`HTTP error! status: ${response.status} - ${errorData.error.message || response.statusText}`);
      }

      const data = await response.json();
      const aiResponse = data.candidates[0].content.parts[0].text;
      const botMessage = { text: aiResponse, sender: 'bot' };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      const errorMessage = { text: `Sorry, I am having trouble connecting to the AI. Error: ${error.message}. Please check the console for more details.`, sender: 'bot' };
      setMessages((prev) => [...prev, errorMessage]);
    }
  };

  return (
    <div>
      <button className={styles.chatToggleButton} onClick={toggleChat}>
        {isOpen ? 'X' : '🤖'}
      </button>
      {isOpen && (
        <div className={styles.chatWindow}>
          <div className={styles.chatMessages}>
            {messages.map((msg, index) => (
              <div key={index} className={styles.message + ' ' + (msg.sender === 'user' ? styles.userMessage : styles.botMessage)}>
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className={styles.chatInput}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask a question..."
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;