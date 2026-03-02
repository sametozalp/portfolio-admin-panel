import api from "../api/api";

export default class ExperienceService {

    async getExperiences() {
        const res = await api.get("/experience");
        return res.data;
    }

    async getById(id) {
        const res = await api.get("/experience/" + id);
        return res.data;
    }
}