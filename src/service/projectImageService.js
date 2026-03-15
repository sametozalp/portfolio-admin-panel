import api from "../api/api";

export default class ProjectImageService {

    async delete(id) {
        const res = await api.delete("/projectImages/" + id);
        return res.data;
    }
}