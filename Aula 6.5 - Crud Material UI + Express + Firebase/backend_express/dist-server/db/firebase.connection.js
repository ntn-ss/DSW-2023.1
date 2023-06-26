"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.db = void 0;
var _app = require("firebase/app");
var _firestore = require("firebase/firestore");
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBxXq_wY7Gyd9GMazQZd2jZseLG0hpvtyY",
  authDomain: "aula-web-t01.firebaseapp.com",
  projectId: "aula-web-t01",
  storageBucket: "aula-web-t01.appspot.com",
  messagingSenderId: "781835237747",
  appId: "1:781835237747:web:1d4ce00bed68b02f01ad06"
};

// Initialize Firebase
var app = (0, _app.initializeApp)(firebaseConfig);
var db = (0, _firestore.getFirestore)(app);
exports.db = db;