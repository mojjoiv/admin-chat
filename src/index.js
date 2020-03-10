import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyDTeoh2AxhyZz8FeeyjmhN4EdH--ZhxBJs",
  authDomain: "livechat-67d8f.firebaseapp.com",
  databaseURL: "https://livechat-67d8f.firebaseio.com",
  projectId: "livechat-67d8f",
  storageBucket: "livechat-67d8f.appspot.com",
  messagingSenderId: "771476996847",
  appId: "1:771476996847:web:142b1a38da180ff5b9d11a",
  measurementId: "G-29RT9MZVGP"
});

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
