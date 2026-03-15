import api from "../api/api";

export default class ProjectService {

    async getProjects() {
        const res = await api.get("/project");
        return res.data;
    }

    async getById(id) {
        const res = await api.get("/project/" + id);
        return res.data;
    }

    async update(id, value) {
        const response = await api.put("/project/" + id, value);
        return response.data;
    }

    // async add(value, files) {
    //     const formData = new FormData();
    //     formData.append("request", JSON.stringify(value));

    //     files.forEach(file => {
    //         console.log("my : " + file)
    //         formData.append("images", file);
    //     });

    //     const response = await api.post("/project", formData);
    //     return response.data;
    // }

    async add(value, files) {
        const formData = new FormData();

        // Veriyi Blob olarak ekleyip content-type'ını 'application/json' olarak belirtiyoruz
        formData.append(
            "request",
            new Blob([JSON.stringify(value)], { type: "application/json" })
        );

        files.forEach(file => {
            if (file) { // Boş inputları göndermemek için kontrol
                formData.append("images", file);
            }
        });

        // Not: Axios kullanıyorsan headers kısmında 'Content-Type': 'multipart/form-data' 
        // yazmana gerek yoktur, tarayıcı boundary ile birlikte otomatik ekler.
        const response = await api.post("/project", formData);
        return response.data;
    }

    async delete(id) {
        const res = await api.delete("/project/" + id);
        return res.data;
    }
}