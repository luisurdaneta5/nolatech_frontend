import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { checkToken } from "../helpers/checkToken";
import { LoadingPage } from "../layouts/components/loading/LoadingComponent";
import { AuthRoutes } from "./AuthRoutes";
import { DashboardRouter } from "./DashboardRouter";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

export const AppRouter = () => {
    const { user, isLoading } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(checkToken());
    }, [dispatch]);

    if (isLoading) {
        return <LoadingPage />;
    }

    if (!isLoading) {
        return (
            <Routes>
                {/* Public Routes */}
                <Route
                    path="/*"
                    element={
                        <PublicRoutes isAuthenticated={!!user.uid}>
                            <AuthRoutes />
                        </PublicRoutes>
                    }
                />

                {/* Private Routes */}
                <Route
                    path="/dashboard/*"
                    element={
                        <PrivateRoutes isAuthenticated={!!user.uid}>
                            <DashboardRouter />
                        </PrivateRoutes>
                    }
                />
            </Routes>
        );
    }
};
