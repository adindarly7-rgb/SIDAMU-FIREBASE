// Firebase Config SIDAMU

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAyGeOMWnKJZxUyzzCJA5poBCyC4tJeSic",
  authDomain: "sidamu-f5f09.firebaseapp.com",
  projectId: "sidamu-f5f09",
  storageBucket: "sidamu-f5f09.firebasestorage.app",
  messagingSenderId: "1077829995479",
  appId: "1:1077829995479:web:537426d7907f5295d35992"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);