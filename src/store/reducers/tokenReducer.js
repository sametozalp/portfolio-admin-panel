import { ADD_ACCESS_TOKEN, REMOVE_ACCESS_TOKEN } from "../actions/tokenActions";
import { ACCESS_TOKEN } from "../initialValues/tokenItem";

const getInitialState = () => {
  const savedToken = localStorage.getItem("accessToken");
  return savedToken || ACCESS_TOKEN;
};

const initialState = getInitialState();

export default function tokenReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_ACCESS_TOKEN:
            localStorage.setItem("accessToken", payload);
            return payload;
        case REMOVE_ACCESS_TOKEN:
            localStorage.removeItem("accessToken");
            return payload;
        default:
            return state;
    }
}