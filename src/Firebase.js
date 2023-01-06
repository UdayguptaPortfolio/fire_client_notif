// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8RPwf9XbZxOBSjgc_ilPeDFVSoDiOoU8",
  authDomain: "react-notification-aeb9a.firebaseapp.com",
  projectId: "react-notification-aeb9a",
  storageBucket: "react-notification-aeb9a.appspot.com",
  messagingSenderId: "788112688193",
  appId: "1:788112688193:web:0498cb7ed21efadc4bf2c0",
  measurementId: "G-41NJ67WLL7"
};

const GENERATED_MESSAGING_KEY = 'BJQF1rJ0ZDlHI73d6EQC5GWZcqXFtPH39yzan6Lbxn5DHaRE5swP5UgIBhlMZZ17oY1-YvdCC7pCiftayYCSyYM'

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

export const fetchToken = (setTokenFound) => {
    return getToken(messaging, {vapidKey: GENERATED_MESSAGING_KEY}).then((currentToken) => {
      if (currentToken) {
        console.log('current token for client: ', currentToken);
        setTokenFound(true);
        // Track the token -> client mapping, by sending to backend server
        // show on the UI that permission is secured
      } else {
        console.log('No registration token available. Request permission to generate one.');
        setTokenFound(false);
        // shows on the UI that permission is required 
      }
    }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
      // catch error while creating client token
    });
  }

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
});