import axios from "axios";

const coreAxios = axios.create({
    baseURL: process.env.REACT_APP_CORE_SERVICE_URL,
    headers: {
        Authorization: `Token ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
    },
});

export default coreAxios;