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

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { text: inputValue, sender: 'user' }]);
      setInputValue('');
      // Simulate a response from the AI
      setTimeout(() => {
        setMessages(prevMessages => [...prevMessages, { text: 'I am the Physical AI Assistant. How can I help with ROS 2?', sender: 'ai' }]);
      }, 1000);
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
