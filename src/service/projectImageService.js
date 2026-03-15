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
}