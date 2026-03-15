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

    async add(value) {
        const response = await api.post("/experience", value);
        return response.data;
    }

    async update(id, value) {
        const response = await api.put("/experience/" + id, value);
        return response.data;
    }

    async setShowableImage(id, value) {
        console.log("id: " + id);
        console.log("value: " + value);
        const res = await api.post(
            "/experience/" + id + "/setShowableImage", value, { headers: { "Content-Type": "application/json" } }
        );
        return res.data;
    }
}