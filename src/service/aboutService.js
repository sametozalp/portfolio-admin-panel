import api from "../api/api";

export default class AboutService {

  async getAbout() {
    const response = await api.get("/about");
    return response.data;
  }

  async add(value) {
    const response = await api.post("/about", value);
    return response.data;
  }

  async update(id, value) {
    const response = await api.put("/about/" + id, value);
    return response.data;
  }
}