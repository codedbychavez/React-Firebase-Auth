import React from "react";

import logo from "./logo.svg";
import "./App.css";

// Import routes
import routes from "./Routes/routes";

// Imports for routing and navigation
import { useRoutes, BrowserRouter as Router } from "react-router-dom";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import IsLoggedIn from "./Auth/AuthGuard";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSHV0bo4IxZZ-QDUadthRCdAT8snTEQP4",
  authDomain: "react-firebase-auth-f1e6d.firebaseapp.com",
  projectId: "react-firebase-auth-f1e6d",
  storageBucket: "react-firebase-auth-f1e6d.appspot.com",
  messagingSenderId: "66112923052",
  appId: "1:66112923052:web:bb2cdb36180e020ebb8609",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const App = () => {
  const isAuthenticated = IsLoggedIn();
  const routing = useRoutes(
    routes({ loggedIn: isAuthenticated, props: { auth: auth } })
  );
  return routing;
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
