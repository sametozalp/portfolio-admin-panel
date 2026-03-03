import api from "../api/api";

export default class CopyrightService {

    async getCopyright() {
        const res = await api.get("/copyright");
        return res.data;
    }

    async add(value) {
        const response = await api.post("/copyright", value);
        return response.data;
    }

    async update(id, value) {
        const response = await api.put("/copyright/" + id, value);
        return response.data;
    }
}