import React, { useState, useRef, useEffect } from 'react';
import styles from './styles.module.css';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

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

    const userMessage = { text: input, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    // **IMPORTANT**: Replace "YOUR_API_KEY" with your actual Gemini API key
    const apiKey = 'AIzaSyC7QOlfNKVzQOl4DviCQh9SxLigKCWYgt0';
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: `You are a helpful assistant for a robotics textbook. Keep your answers concise and focused on the user's question. User's question: ${input}` }] }],
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const botMessage = { text: data.candidates[0].content.parts[0].text, sender: 'bot' };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      const errorMessage = { text: 'Sorry, I am having trouble connecting to the AI. Please check the console for errors.', sender: 'bot' };
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