import { initializeApp } from '@firebase/app';
import { getAuth } from '@firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDhCa_5-5yMTvfcp35of1BqugxNdfQO9FI",
    authDomain: "home-food-app-firebase.firebaseapp.com",
    projectId: "home-food-app-firebase",
    storageBucket: "home-food-app-firebase.appspot.com",
    messagingSenderId: "931532785274",
    appId: "1:931532785274:web:859485f6aed6858e565dc3",
    measurementId: "G-101XZ4ZS03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = getAuth(app);

export default auth;