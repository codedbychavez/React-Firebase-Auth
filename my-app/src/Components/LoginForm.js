import React from 'react';

import './LoginForm.css'

// Import custom hook
import usePersistedState from '../Custom/PersistedState';

// Import signInWithEmailAndPassword
import { signInWithEmailAndPassword } from '@firebase/auth';

const LoginForm = (props) => {
    const [userLoggedIn, setUserLoggedIn] = usePersistedState("user", {});
    const auth = props.auth;

    const handleSubmit = (event) => {
        event.preventDefault();
        const enteredEmail = event.target[0].value;
        const enteredPassword = event.target[1].value;

        // TODO: Add form validations

        signInWithEmailAndPassword(auth, enteredEmail, enteredPassword)
        .then((userCredential) => {
            const user = userCredential.user;
            setUserLoggedIn(user);
            alert('Logged in successfully');
            // Navigate to home after login
            window.location.pathname = "/home";
        })
        .catch((error) => {
            const errorCode = error.code;
            alert(errorCode);
            console.log(errorCode);
        })
    };

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                <input type="email" name="email" />
                </label>
                
                <label>
                    Password:
                <input type="password" name="password" />
                </label>

                <input type="submit" value="Login" />
            </form>
        </>
    )
}


export default LoginForm;