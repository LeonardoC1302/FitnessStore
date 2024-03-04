import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBnxEEJNtClqbyte4hF8d69l3qN3QLKLgU",

    authDomain: "fitnessstore-5962a.firebaseapp.com",

    projectId: "fitnessstore-5962a",

    storageBucket: "fitnessstore-5962a.appspot.com",

    messagingSenderId: "878908744176",

    appId: "1:878908744176:web:2ea4f009bf758f63337d35"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
  