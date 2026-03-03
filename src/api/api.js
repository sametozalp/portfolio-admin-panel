import axios from "axios";
import { toast } from "react-toastify";

const api = axios.create({
    baseURL: "http://localhost:8080/api"
})

api.interceptors.response.use(
    (response) => {
        toast.success("Başarılı")
        return response;
    },
    (error) => {
        toast.error("Başarısız..\n\n" + error)
        return error;
    }
)

export default api;