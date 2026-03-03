import api from "../api/api";

export default class ContactService {

    async getContact() {
        const response = await api.get("/contact");
        return response.data;
    }

    async add(value) {
        const response = await api.post("/contact", value);
        return response.data;
    }

    async update(id, value) {
        const response = await api.put("/contact/" + id, value);
        return response.data;
    }
}