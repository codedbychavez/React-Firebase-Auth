import React from "react";
import { Navigate } from "react-router-dom";

// Import pages
import HomePage from "./Pages/HomePage";
import AuthPage from "./Pages/AuthPage";

const routes = (isLoggedIn) => [
    {
        path: 'home',
        element: isLoggedIn? <HomePage /> : <Navigate to="/auth" />
    },
    {
        path: 'auth',
        element: <AuthPage />
    },
]

export default routes;