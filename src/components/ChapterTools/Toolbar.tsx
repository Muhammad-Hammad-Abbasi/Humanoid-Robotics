import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';

// --- Helper Functions & Components ---
const formatText = (text) => {
  if (typeof text !== 'string') return '';
  // Remove frontmatter, then remove markdown symbols for clean text
  return text
    .replace(/^---[\s\S]+?---/, '')
    .replace(/##|###|`|\*\*|__/g, '')
    .trim();
};

const LoadingSpinner = () => <div className={styles.spinner}></div>;

const Modal = ({ children, onClose }) => (
  <div className={styles.modalOverlay}>
    <div className={styles.modalContent}>
      <button className={styles.modalClose} onClick={onClose}>×</button>
      {children}
    </div>
  </div>
);

// --- Main Toolbar Component ---
const Toolbar = () => {
  const [isTranslateModalOpen, setIsTranslateModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const [language, setLanguage] = useState('Urdu');
  const [chapter, setChapter] = useState('01');
  const [translationResult, setTranslationResult] = useState('');

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleStartTranslation = async () => {
    setIsLoading(true);
    setTranslationResult(''); 
    
    try {
      const response = await fetch('https://humanoid-robotics.onrender.com/translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ language, chapter_id: chapter }),
      });
      if (!response.ok) throw new Error('Failed to fetch translation.');
      const data = await response.json();
      setTranslationResult(formatText(data.translation));
    } catch (error) {
      setTranslationResult('Error: Could not connect to the translation service.');
    } finally {
      setIsLoading(false);
    }
  };

  const toolbarClassName = `${styles.toolbar} ${isMobile ? styles.toolbarMobile : styles.toolbarDesktop}`;
  
  const chapterOptions = [
    { id: '01', name: 'Module 1: Physical AI' },
    { id: '02', name: 'Module 2: ROS 2 System' },
    { id: '03', name: 'Module 3: Digital Twins' },
    { id: '04', name: 'Module 4: NVIDIA Isaac' },
    { id: '05', name: 'Module 5: Humanoid Dev' },
    { id: '06', name: 'Module 6: VLA Models' },
    { id: '07', name: 'Module 7: Conversational' },
    { id: '08', name: 'Module 8: Capstone Project' },
    { id: '09', name: 'Module 9: Hardware' },
  ];

  const resultStyle: React.CSSProperties = {
    direction: language === 'Urdu' ? 'rtl' : 'ltr',
    textAlign: language === 'Urdu' ? 'right' : 'left',
    fontFamily: language === 'Urdu' ? 'Tahoma, Arial, sans-serif' : 'inherit',
    fontSize: language === 'Urdu' ? '18px' : 'inherit',
    lineHeight: language === 'Urdu' ? '2' : 'inherit',
  };

  return (
    <>
      {isTranslateModalOpen && (
        <Modal onClose={() => setIsTranslateModalOpen(false)}>
          <div className={styles.modalHeader}>
            <h2>Chapter Translation</h2>
          </div>
          <div className={styles.modalBody}>
            <div className={styles.selectGroup}>
              <label htmlFor="language-select">Language:</label>
              <select id="language-select" className={styles.selectInput} value={language} onChange={(e) => setLanguage(e.target.value)}>
                <option>Urdu</option>
                <option>Hindi</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
            </div>
            <div className={styles.selectGroup}>
              <label htmlFor="chapter-select">Chapter:</label>
              <select id="chapter-select" className={styles.selectInput} value={chapter} onChange={(e) => setChapter(e.target.value)}>
                {chapterOptions.map(opt => (
                  <option key={opt.id} value={opt.id}>{opt.name}</option>
                ))}
              </select>
            </div>
            <button onClick={handleStartTranslation} disabled={isLoading} className={styles.modalButton}>
              {isLoading ? 'Translating...' : 'Start Translation'}
            </button>
            <div className={styles.resultArea} style={resultStyle}>
              {isLoading ? <LoadingSpinner /> : <pre>{translationResult}</pre>}
            </div>
          </div>
        </Modal>
      )}

      <div className={toolbarClassName}>
        <button onClick={() => setIsTranslateModalOpen(true)} disabled={isLoading} title="Translate a Chapter">
          🌐
        </button>
      </div>
    </>
  );
};

export default Toolbar;