import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/auth/login/LoginPage";
import { RegisterPage } from "../pages/auth/register/RegisterPage";

export const AuthRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />\
            <Route path="/register" element={<RegisterPage />} />
            <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
    );
};
