import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from '@docusaurus/router';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase'; 
import Toolbar from '../components/ChapterTools/Toolbar';
import ChatWidget from '../components/Chatbot/ChatWidget';

// A simple spinner component
const LoadingSpinner = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <div style={{
      border: '4px solid rgba(0, 0, 0, 0.1)',
      width: '36px',
      height: '36px',
      borderRadius: '50%',
      borderLeftColor: '#00796b',
      animation: 'spin 1s ease infinite'
    }}></div>
    <style>{`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

export default function Root({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!loading) {
      const isDocsRoute = location.pathname.startsWith('/docs');
      const isAuthRoute = location.pathname.startsWith('/login') || location.pathname.startsWith('/signup');

      if (!user && isDocsRoute) {
        history.push('/login');
      }
    }
  }, [user, loading, location]);

  const isProtected = location.pathname.startsWith('/docs');

  if (loading && isProtected) {
    return <LoadingSpinner />;
  }
  
  // Render children, and also include the global UI widgets
  return (
    <>
      {children}
      <Toolbar />
      <ChatWidget />
    </>
  );
}