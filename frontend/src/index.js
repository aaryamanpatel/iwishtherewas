import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
firebase.initializeApp({
  apiKey: "AIzaSyA2xmghuyV6ILiiaf88ZS5Qnbua2Pr4xBw",
  authDomain: "i-wish-there-was.firebaseapp.com",
  databaseURL: "https://i-wish-there-was-default-rtdb.firebaseio.com",
  projectId: "i-wish-there-was",
  storageBucket: "i-wish-there-was.appspot.com",
  messagingSenderId: "205429209850",
  appId: "1:205429209850:web:89fb3a7931c8154326e743",
  measurementId: "G-4ES3N7FXYH"
});

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export var url = "http://localhost:3000";

export function regularRequest(handler, method, body, callback) {
  const http = new XMLHttpRequest();
  http.responseType = 'json';

  http.open(method, url + handler, true);

  if (body!=null) {
    http.setRequestHeader('Content-type', 'application/json');
  }

  http.onload = function() {
    callback(http.response);
  }

  http.send(JSON.stringify(body));
}
