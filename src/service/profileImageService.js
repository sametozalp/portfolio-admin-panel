import api from "../api/api";

export default class ProfileImageService {

    async getProfileImage() {
        const res = await api.get("/profileImages/profileImage");
        return res.data;
    }

    async add(file) {
        const formData = new FormData();
        formData.append("image", file);

        const response = await api.post("/profileImages/add", formData);
        return response.data;
    }

    async delete(id) {
        const res = await api.delete("/profileImages/" + id);
        return res.data;
    }
}