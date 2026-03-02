import api from "../api/api";

export default class ContactService {

    async getContact() {
        const response = await api.get("/contact");
        return response.data;
    }
}