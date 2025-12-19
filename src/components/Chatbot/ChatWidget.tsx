import React, { useState, useRef, useEffect, CSSProperties } from 'react';

// --- Helper Icon Components ---
const SendIcon = ({ disabled }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" fill={disabled ? '#999999' : '#4F46E5'}/>
  </svg>
);

const BotIcon = () => (
  <span style={{ marginRight: '8px', fontSize: '1.2rem' }}>🤖</span>
);

const ThinkingBubble = () => (
  <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-start' }}>
    <BotIcon />
    <div style={{
      padding: '12px 18px',
      borderRadius: '18px',
      maxWidth: '80%',
      wordWrap: 'break-word',
      background: '#E9E9EB',
      color: '#333',
      alignSelf: 'flex-start',
      borderBottomLeftRadius: '4px',
      opacity: 0.7
    }}>
      Thinking...
    </div>
  </div>
);

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const messagesEndRef = useRef(null);

  // --- Responsive Effect ---
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages, isLoading]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen && messages.length === 0) {
      setMessages([{ text: 'Hello! How can I help you learn about robotics today?', sender: 'bot' }]);
    }
  };

  const handleSend = async () => {
    if (input.trim() === '' || isLoading) return;
    const userQuestion = input;
    const userMessage = { text: userQuestion, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('https://humanoid-robotics.onrender.com/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userQuestion }),
      });
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      setMessages((prev) => [...prev, { text: data.response, sender: 'bot' }]);
    } catch (error) {
      console.error('Error calling backend API:', error);
      setMessages((prev) => [...prev, { text: `Sorry, there was an error. Please check the console.`, sender: 'bot' }]);
    } finally {
      setIsLoading(false);
    }
  };

  // --- Inline Styles ---
  const styles: { [key: string]: CSSProperties } = {
    chatButton: {
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      background: 'linear-gradient(45deg, #007BFF, #8A2BE2)',
      color: 'white',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '24px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)',
      zIndex: 1000,
    },
    chatWindow: {
      position: 'fixed',
      display: 'flex',
      flexDirection: 'column',
      zIndex: 99999, 
      overflow: 'hidden',
      border: '1px solid rgba(255, 255, 255, 0.18)',
      boxShadow: '0 8px 32px rgba(31, 38, 135, 0.37)',
      borderRadius: '20px',
    },
    chatWindowDesktop: {
      bottom: '100px',
      right: '20px',
      width: '380px',
      height: '400px',
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
    },
    chatWindowMobile: {
      bottom: '20px',
      right: '20px',
      left: '20px',
      width: 'calc(100% - 40px)',
      height: '70vh',
      backgroundColor: 'white',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 20px',
      background: 'linear-gradient(45deg, #007BFF, #8A2BE2)',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '1.2rem',
    },
    headerTitle: {
      flexGrow: 1,
      textAlign: 'start',
      paddingLeft: '24px', 
    },
    closeButton: {
      background: 'transparent',
      border: 'none',
      color: 'white',
      fontSize: '1.5rem',
      cursor: 'pointer',
    },
    messageList: {
      flexGrow: 1,
      padding: '20px',
      overflowY: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
    },
    messageContainer: { display: 'flex', alignItems: 'flex-end' },
    messageBubble: { padding: '12px 18px', borderRadius: '18px', maxWidth: '80%', wordWrap: 'break-word' },
    userInput: { background: 'linear-gradient(45deg, #007BFF, #6a0dad)', color: 'white', borderBottomRightRadius: '4px' },
    aiResponse: { background: '#E9E9EB', color: '#333', borderBottomLeftRadius: '4px' },
    inputArea: {
      display: 'flex',
      alignItems: 'center',
      padding: '10px',
      borderTop: '1px solid #e0e0e0',
      backgroundColor: '#fff',
    },
    inputField: {
      flex: 1,
      border: '1px solid #e0e0e0',
      borderRadius: '20px',
      padding: '12px 18px',
      fontSize: '1rem',
      background: '#ffffff',
      color: '#000000',
      outline: 'none',
    },
    sendButton: {
      width: '40px',
      marginLeft: '10px',
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      padding: '0px',
    }
  };
  
  const dynamicChatWindowStyle = {
    ...styles.chatWindow,
    ...(isMobile ? styles.chatWindowMobile : styles.chatWindowDesktop),
  };

  return (
    <div>
      {!isOpen && (
        <button style={styles.chatButton} onClick={toggleChat} title="AI Tutor">
          💬
        </button>
      )}
      {isOpen && (
        <div style={dynamicChatWindowStyle}>
          <div style={styles.header}>
            <span style={styles.headerTitle}>🤖 AI Tutor</span>
            <button style={styles.closeButton} onClick={toggleChat}>×</button>
          </div>
          <div style={styles.messageList}>
            {messages.map((msg, index) => (
              <div key={index} style={{
                ...styles.messageContainer, 
                justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start'
              }}>
                {msg.sender === 'bot' && <BotIcon />}
                <div style={{
                  ...styles.messageBubble,
                  ...(msg.sender === 'user' ? styles.userInput : styles.aiResponse)
                }}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && <ThinkingBubble />}
            <div ref={messagesEndRef} />
          </div>
          <div style={styles.inputArea}>
            <input
              style={styles.inputField}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder={isLoading ? "Waiting for response..." : "Ask a question..."}
              disabled={isLoading}
            />
            <button style={styles.sendButton} onClick={handleSend} title="Send" disabled={isLoading}>
              <SendIcon disabled={isLoading} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
