import axios from "axios";
import { toast } from "react-toastify";

const api = axios.create({
  baseURL: "http://localhost:8080/api"
})

api.interceptors.request.use(
  (config) => {

    if (config.url?.includes("/login")) {
      return config;
    }

    const token = localStorage.getItem("accessToken");

    if (token)
      config.headers.Authorization = `Bearer ${token}`;
    else
      window.location.pathname = "/login";
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => {
    toast.success("Başarılı")
    return response;
  },
  (error) => {

    if (error.response && error.response.status === 401) {
      localStorage.removeItem("accessToken");
      window.location.href = "/login";
      toast.error("Yeniden giriş yapmalısınız..")
    } else {
      toast.error("Başarısız..\n\n" + error)
      return error;
    }
  }
)

export default api;