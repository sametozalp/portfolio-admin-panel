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
}