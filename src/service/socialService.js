import api from "../api/api";

export default class SocialService {

    async getSocials() {
        const res = await api.get("/social/all");
        return res.data;
    }

    async getSocial(id) {
        const res = await api.get("/social/" + id);
        return res.data;
    }

    async add(value) {
        const res = await api.post("/social", value);
        return res.data;
    }

    async update(id, value) {
        const res = await api.put("/social/" + id, value);
        return res.data;
    }

    async upOrderNumber(id) {
        const res = await api.post("/social/" + id + "/upOrderNumber");
        return res.data;
    }

    async downOrderNumber(id) {
        const res = await api.post("/social/" + id + "/downOrderNumber");
        return res.data;
    }

    async setShowable(id, value) {
        const res = await api.post(
            "/social/" + id + "/setShowable", value, { headers: { "Content-Type": "application/json" } }
        );
        return res.data;
    }

}