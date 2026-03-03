import api from "../api/api";

export default class EducationService {

    async getEducations() {
        const res = await api.get("/education");
        return res.data;
    }

    async getById(id) {
        const res = await api.get("/education/" + id);
        return res.data;
    }

    async update(id, value) {
        const response = await api.put("/education/" + id, value);
        return response.data;
    }

    async add(value) {
        const response = await api.post("/education", value);
        return response.data;
    }
}