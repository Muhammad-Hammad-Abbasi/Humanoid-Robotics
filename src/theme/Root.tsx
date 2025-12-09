import React from 'react';
import ChatWidget from '@site/src/components/Chatbot/ChatWidget';

function Root({ children }) {
  return (
    <>
      {children}
      <ChatWidget />
    </>
  );
}

export default Root;
