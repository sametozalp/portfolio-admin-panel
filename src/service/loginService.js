import api from "../api/api";

export default class LoginService {

    async login(request) {
        const res = await api.post("/auth/login", request);
        return res;
    }

    async validateToken(token) {
        const res = await api.post("/auth/validateToken", token);
        return res;
    }
}