import React, { useState } from 'react';
import styles from './styles.module.css';

// A simple Modal component
const Modal = ({ content, onClose }) => (
  <div className={styles.modalOverlay}>
    <div className={styles.modalContent}>
      <button className={styles.modalClose} onClick={onClose}>×</button>
      <pre className={styles.preformattedText}>{content}</pre>
    </div>
  </div>
);

const Toolbar = () => {
  const [modalContent, setModalContent] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const callGeminiAPI = async (prompt) => {
    setIsLoading(true);
    setModalContent('Loading...');

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
          contents: [{ parts: [{ text: prompt }] }],
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const resultText = data.candidates[0].content.parts[0].text;
      setModalContent(resultText);
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      setModalContent('Sorry, an error occurred. Please check the console for details.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleTranslate = () => {
    const pageText = document.body.innerText.substring(0, 3000); // Limit context size
    const prompt = `Translate the following technical text into simple Urdu, keeping the key technical terms in English. For example, "Robot Operating System" should remain "Robot Operating System".\n\nText to translate:\n\n${pageText}`;
    callGeminiAPI(prompt);
  };

  const handlePersonalize = () => {
    const pageText = document.body.innerText.substring(0, 3000); // Limit context size
    const prompt = `Explain the following technical content like I am a complete beginner, as if I'm 10 years old. Use simple analogies.\n\nContent to explain:\n\n${pageText}`;
    callGeminiAPI(prompt);
  };

  return (
    <>
      {modalContent && <Modal content={modalContent} onClose={() => setModalContent(null)} />}
      <div className={styles.toolbar}>
        <button onClick={handleTranslate} disabled={isLoading}>
          {isLoading ? 'Translating...' : 'Translate to Urdu'}
        </button>
        <button onClick={handlePersonalize} disabled={isLoading}>
          {isLoading ? 'Personalizing...' : 'Explain Like I\'m 10'}
        </button>
      </div>
    </>
  );
};

export default Toolbar;
