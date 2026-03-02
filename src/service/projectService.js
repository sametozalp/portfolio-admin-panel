import api from "../api/api";

export default class ProjectService {
    async getProjects() {
        const res = await api.get("/project");
        return res.data;
    }
}