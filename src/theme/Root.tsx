import React from 'react';
import ChatWidget from '@site/src/components/Chatbot/ChatWidget';
import Toolbar from '@site/src/components/ChapterTools/Toolbar';

function Root({ children }) {
  return (
    <>
      {children}
      <ChatWidget />
      <Toolbar />
    </>
  );
}

export default Root;