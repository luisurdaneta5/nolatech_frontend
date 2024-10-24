import api from "../api/api";
import {
    setLogin,
    setLogout,
    startLoadingAuth,
} from "../store/slices/auth/authSlices";

export const checkToken = () => {
    return async (dispatch) => {
        const token = localStorage.getItem("token");

        if (!token) {
            dispatch(setLogout());
        }

        await dispatch(startLoadingAuth());

        try {
            const { data } = await api.get("/auth/renew");
            localStorage.setItem("token", data.token);
            localStorage.setItem("token-init-date", new Date().getTime());

            dispatch(
                setLogin({
                    uid: data.uid,
                    name: data.name,
                    email: data.email,
                    role: data.role,
                })
            );
        } catch (error) {
            console.log(error);
            localStorage.clear();
            dispatch(setLogout());
        }
    };
};
