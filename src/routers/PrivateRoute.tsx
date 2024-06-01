// src/PrivateRoute.tsx
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute: React.FC = () => {
    const isAuthenticated = localStorage.getItem("loggedIn") === "true";
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
