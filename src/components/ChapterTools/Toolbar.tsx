import React from 'react';
import styles from './styles.module.css';

const Toolbar = () => {
  const handleTranslate = () => {
    alert('Translation to Urdu enabled (Demo)');
  };

  const handlePersonalize = () => {
    alert('Content adapted for Beginner level');
  };

  return (
    <div className={styles.toolbar}>
      <button onClick={handleTranslate} className={`${styles.toolbarButton} ${styles.translateButton}`}>
        Translate to Urdu
      </button>
      <button onClick={handlePersonalize} className={`${styles.toolbarButton} ${styles.personalizeButton}`}>
        Personalize Content
      </button>
    </div>
  );
};

export default Toolbar;