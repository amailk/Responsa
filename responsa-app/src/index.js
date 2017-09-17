import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase'

var config = {
  apiKey: "AIzaSyArdeBfY5Mcnu4-uwD3sCU7p6qt7Xd8ASY",
  authDomain: "responsa-app.firebaseapp.com",
  databaseURL: "https://responsa-app.firebaseio.com",
  projectId: "responsa-app",
  storageBucket: "",
  messagingSenderId: "1017906446626"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
