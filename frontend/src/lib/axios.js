import axios from "axios";

const BASE_URL = import.meta.env.MODE === "development" ? "https://thoughtspace-vercel.vercel.app/api" : "/api" //DYNAMIC CHANGED FOR DEPLOYMENT
const api = axios.create({
    baseURL: BASE_URL
})

export default api;