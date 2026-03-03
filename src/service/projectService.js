import api from "../api/api";

export default class ProjectService {

    async getProjects() {
        const res = await api.get("/project");
        return res.data;
    }

    async getById(id) {
        const res = await api.get("/project/" + id);
        return res.data;
    }

    async update(id, value) {
        const response = await api.put("/project/" + id, value);
        return response.data;
    }

    async add(value) {
        const response = await api.post("/project", value);
        return response.data;
    }
}