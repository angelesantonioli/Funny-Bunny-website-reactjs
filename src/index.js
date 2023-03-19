import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCZdLSGVsd6PyoQdx2L3hyFnI3bE8x5AL8",
    authDomain: "funnybunny-94c3b.firebaseapp.com",
    projectId: "funnybunny-94c3b",
    storageBucket: "funnybunny-94c3b.appspot.com",
    messagingSenderId: "757167055666",
    appId: "1:757167055666:web:37340f25857871c7ff6d2b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
