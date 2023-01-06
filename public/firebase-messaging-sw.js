// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
    apiKey: "AIzaSyB8RPwf9XbZxOBSjgc_ilPeDFVSoDiOoU8",
    authDomain: "react-notification-aeb9a.firebaseapp.com",
    projectId: "react-notification-aeb9a",
    storageBucket: "react-notification-aeb9a.appspot.com",
    messagingSenderId: "788112688193",
    appId: "1:788112688193:web:0498cb7ed21efadc4bf2c0",
    measurementId: "G-41NJ67WLL7"
  };
firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});