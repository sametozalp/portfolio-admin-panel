import api from "../api/api";

export default class ExperienceService {

    async getExperiences() {
        const res = await api.get("/experience");
        return res.data;
    }
}