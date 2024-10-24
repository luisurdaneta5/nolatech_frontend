/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";

export const PublicRoutes = ({ isAuthenticated, children }) => {
    return !isAuthenticated ? children : <Navigate to="/dashboard" />;
};
