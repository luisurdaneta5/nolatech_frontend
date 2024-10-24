import axios from "axios";

const VITE_API_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
    baseURL: VITE_API_URL,
});

api.interceptors.request.use((config) => {
    config.headers = {
        ...config.headers,
        "x-token": localStorage.getItem("token"),
    };
    return config;
});

export default api;
