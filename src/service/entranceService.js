import api from "../api/api";

export default class EntranceService {

  async getEntrance() {
    const response = await api.get("/entrance");
    return response.data;
  }
}