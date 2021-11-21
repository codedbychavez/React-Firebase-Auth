import React from "react";
import { Navigate } from "react-router-dom";

// Import pages
import HomePage from "../Pages/HomePage";
import AuthPage from "../Pages/AuthPage";

const routes = ({ loggedIn: isLoggedIn, props: props }) => [
  {
    path: "home",
    element: isLoggedIn ? <HomePage {...props} /> : <Navigate to="/auth" />,
  },
  {
    path: "auth",
    element: <AuthPage {...props} />,
  },
];

export default routes;
