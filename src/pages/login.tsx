import React, { useState } from 'react';
import Layout from '@theme/Layout';
import styles from './login.module.css';

const LoginPage = () => {
  const [name, setName] = useState('');
  const [background, setBackground] = useState('Software');

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { name, background };
    localStorage.setItem('user', JSON.stringify(user));
    window.location.href = '/';
  };

  return (
    <Layout title="Login">
      <div className={styles.loginContainer}>
        <div className={styles.loginForm}>
          <h1>Login or Sign Up</h1>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="background">Technical Background</label>
              <select
                id="background"
                value={background}
                onChange={(e) => setBackground(e.target.value)}
              >
                <option>Software</option>
                <option>Hardware</option>
              </select>
            </div>
            <button type="submit" className={styles.submitButton}>
              Sign In
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;
