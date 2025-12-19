import React, { useState, useEffect } from 'react';
import Link from '@docusaurus/Link';
import { useHistory } from '@docusaurus/router';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase'; // Adjust path if needed

function AuthNavbarItem() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      // Redirect to a non-protected page after logout, e.g., the homepage or login page
      history.push('/login'); 
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  if (loading) {
    return <div className="navbar__item"></div>; // Render an empty item while loading to prevent layout shift
  }

  if (user) {
    return (
      <a
        className="navbar__item navbar__link"
        onClick={handleLogout}
        style={{ cursor: 'pointer' }}
      >
        Logout
      </a>
    );
  } else {
    return (
      <Link
        className="navbar__item navbar__link"
        to="/login"
      >
        Login
      </Link>
    );
  }
}

export default AuthNavbarItem;
