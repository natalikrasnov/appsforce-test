import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './styles/_main.style.scss'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWlmfR88WwWYNvypzYL0_HHrIL177kFpo",
  authDomain: "appsforse-27362.firebaseapp.com",
  projectId: "appsforse-27362",
  storageBucket: "appsforse-27362.appspot.com",
  messagingSenderId: "494591393125",
  appId: "1:494591393125:web:ac311773ecac6aac7b358c",
  measurementId: "G-V583KPZLH4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
