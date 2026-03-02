import api from "../api/api";

export default class CopyrightService {

    async getCopyright() {
        const res = await api.get("/copyright");
        return res.data;
    }
}