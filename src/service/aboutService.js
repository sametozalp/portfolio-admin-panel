import api from "../api/api";

export default class AboutService {

  async getAbout() {
    const response = await api.get("/about");
    return response.data;
  }
}