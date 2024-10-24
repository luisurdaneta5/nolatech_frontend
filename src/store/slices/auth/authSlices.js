import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        isLoading: false,
        isAuthenticated: false,
        user: {
            name: "",
            email: "",
            uid: "",
            role: "",
        },
    },
    reducers: {
        startLoadingAuth: (state) => {
            state.isLoading = true;
        },
        setLogin: (state, action) => {
            state.isAuthenticated = true;
            state.user.uid = action.payload.uid;
            state.user.role = action.payload.role;
            state.user.name = action.payload.name;
            state.user.email = action.payload.email;
            state.isLoading = false;
        },
        setLogout: (state) => {
            state.isAuthenticated = false;
            state.isLoading = false;
            state.user = {
                name: "",
                email: "",
                uid: "",
                role: "",
            };
        },
    },
});

// Action creators are generated for each case reducer function
export const { startLoadingAuth, setLogin, setLogout } = authSlice.actions;
