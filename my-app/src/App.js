import logo from './logo.svg';
import './App.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSHV0bo4IxZZ-QDUadthRCdAT8snTEQP4",
  authDomain: "react-firebase-auth-f1e6d.firebaseapp.com",
  projectId: "react-firebase-auth-f1e6d",
  storageBucket: "react-firebase-auth-f1e6d.appspot.com",
  messagingSenderId: "66112923052",
  appId: "1:66112923052:web:bb2cdb36180e020ebb8609"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
