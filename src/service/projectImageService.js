import api from "../api/api";

export default class ProjectImageService {

    async delete(id) {
        const res = await api.delete("/projectImages/" + id);
        return res.data;
    }

    async upOrderNumber(id) {
        const res = await api.post("/projectImages/" + id + "/upOrderNumber");
        return res.data;
    }

    async downOrderNumber(id) {
        const res = await api.post("/projectImages/" + id + "/downOrderNumber");
        return res.data;
    }

    async setCoverImage(id) {
        const res = await api.post("/projectImages/" + id + "/setCoverImage");
        return res.data;
    }

    async setShowableImage(id, value) {
        const res = await api.post(
            "/projectImages/" + id + "/setShowableImage", value, { headers: { "Content-Type": "application/json" } }
        );
        return res.data;
    }
}