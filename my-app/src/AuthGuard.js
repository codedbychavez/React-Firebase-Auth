import React from "react";
import { Navigate, Route, Routes, BrowserRouter as Router } from "react-router-dom";

const parseJwt = (token) => {
    try {
        return JSON.parse(atob(token.split('.')[1]));
    } catch (error) {
        return null;
    }
}

const IsLoggedIn = () => {

    const isAuthenticated = false;

//   const isAuthenticated = () => {
//     try {
//       const user = JSON.parse(localStorage.getItem("user"));

//       if(user) {
//           const decodedJWT = parseJwt(user.user.stsTokenManager.accessToken);

//           if(decodedJWT.exp * 1000 < Date.now()) {
//               return false;
//           } else {
//               return false
//           }
//       }
//     } catch (error) {
//       console.log(error);
//       return false;
//     }
//   }
  
return isAuthenticated;

}

export default IsLoggedIn;