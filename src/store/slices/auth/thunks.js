import { toast } from "react-toastify";
import api from "../../../api/api";
import { setLogin, setLogout, startLoadingAuth } from "./authSlices";

export const startLogin = (email, password) => {
    return async (dispatch) => {
        await dispatch(startLoadingAuth());

        api.post("/auth/login", { email, password })
            .then(({ data }) => {
                console.log("data", data);
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
            })
            .catch(({ response }) => {
                const { msg } = response.data;
                toast.error(msg, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                dispatch(setLogout());
            });
    };
};
