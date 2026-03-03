import api from "../api/api";

export default class EntranceService {

  async getEntrance() {
    const response = await api.get("/entrance");
    return response.data;
  }

  async add(value) {
    const response = await api.post("/entrance", value);
    return response.data;
  }

  async update(id, value) {
    const response = await api.put("/entrance/" + id, value);
    return response.data;
  }
}