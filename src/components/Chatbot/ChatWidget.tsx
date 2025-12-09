import React, { useState } from 'react';
import styles from './styles.module.css';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = async () => {
    if (inputValue.trim()) {
      const userMessage = { text: inputValue, sender: 'user' };
      setMessages(prevMessages => [...prevMessages, userMessage]);
      setInputValue('');

      const API_KEY = 'YOUR_GEMINI_KEY';
      const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

      const systemInstruction = "You are an expert on Physical AI and ROS 2. Answer briefly.";

      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [{
              parts: [
                { text: systemInstruction },
                { text: `\nUser: ${inputValue}` }
              ]
            }]
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const aiResponse = data.candidates[0].content.parts[0].text;
        const aiMessage = { text: aiResponse, sender: 'ai' };
        setMessages(prevMessages => [...prevMessages, aiMessage]);
      } catch (error) {
        console.error("Error calling Gemini API:", error);
        const errorMessage = { text: 'Sorry, I am having trouble connecting to the AI. Please try again later.', sender: 'ai' };
        setMessages(prevMessages => [...prevMessages, errorMessage]);
      }
    }
  };

  if (!isOpen) {
    return (
      <button className={styles.chatButton} onClick={toggleChat}>
        Ask AI
      </button>
    );
  }

  return (
    <div className={styles.chatWindow}>
      <div className={styles.chatHeader}>
        <h2>AI Assistant</h2>
        <button onClick={toggleChat} className={styles.closeButton}>X</button>
      </div>
      <div className={styles.messageList}>
        {messages.map((message, index) => (
          <div key={index} className={`${styles.message} ${styles[message.sender]}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className={styles.chatInput}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatWidget;
