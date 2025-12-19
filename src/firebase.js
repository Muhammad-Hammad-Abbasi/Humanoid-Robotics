import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration using Docusaurus environment variables
const firebaseConfig = {
  apiKey: "AIzaSyAJYYS1UCko--6_g8a2rwy8pg-CdHgMnp0",
  authDomain: "robotics-auth-2fcce.firebaseapp.com",
  projectId: "robotics-auth-2fcce",
  storageBucket: "robotics-auth-2fcce.firebasestorage.app",
  messagingSenderId: "794424238886",
  appId: "1:794424238886:web:6a01fd2e7a1893279617e7",
  measurementId: "G-ME5EZJKRPM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
