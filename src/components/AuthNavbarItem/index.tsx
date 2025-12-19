import React, { useState, useEffect } from 'react';
import Link from '@docusaurus/Link';
import { useHistory } from '@docusaurus/router';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../firebase'; // Adjust path as needed

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
      history.push('/login'); // Redirect to login page after logout
    } catch (error) {
      console.error('Error logging out:', error);
      alert('Failed to log out. Please try again.');
    }
  };

  if (loading) {
    return null; // Or a loading spinner if preferred
  }

  if (user) {
    return (
      <button
        className="navbar__item button button--secondary button--sm" // Docusaurus button styling
        onClick={handleLogout}
        style={{ marginLeft: '10px' }}
      >
        Logout
      </button>
    );
  } else {
    return (
      <Link
        className="navbar__item button button--primary button--sm" // Docusaurus button styling
        to="/login"
        style={{ marginLeft: '10px' }}
      >
        Login
      </Link>
    );
  }
}

export default AuthNavbarItem;
