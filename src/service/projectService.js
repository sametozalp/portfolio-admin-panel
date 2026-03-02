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
}