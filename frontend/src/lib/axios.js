import axios from "axios";

const BASE_URL = import.meta.env.MODE === "development" ? `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/api` : "/api" //DYNAMIC CHANGED FOR DEPLOYMENT
const api = axios.create({
    baseURL: BASE_URL
})

export default api;