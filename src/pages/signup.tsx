import React, { useState } from 'react';
import { useHistory } from '@docusaurus/router';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { auth } from '../firebase';
import styles from './auth.module.css';

// --- SVG Icons for Password Toggle ---
const EyeOpenIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
);
const EyeClosedIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
);

const SignUpPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const history = useHistory();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName: name });
      history.push('/login');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Layout title="Sign Up">
      <div className={styles.authContainer}>
        <div className={styles.authBox}>
          <h2>Create an Account</h2>
          <form onSubmit={handleSignUp}>
            <div className={styles.inputGroup}>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name" required />
            </div>
            <div className={styles.inputGroup}>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            </div>
            <div className={styles.inputGroup}>
              <div className={styles.passwordWrapper}>
                <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                <button type="button" className={styles.eyeIcon} onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <EyeClosedIcon /> : <EyeOpenIcon />}
                </button>
              </div>
            </div>
            {error && <p className={styles.error}>{error}</p>}
            <button type="submit" className={`${styles.authButton} ${styles.primaryButton}`}>Sign Up</button>
          </form>
          <p>
            <Link to="/login" className={styles.authLink}>Already have an account? Login</Link>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default SignUpPage;
