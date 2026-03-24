export const ADD_ACCESS_TOKEN = "ADD_ACCESS_TOKEN";
export const REMOVE_ACCESS_TOKEN = "REMOVE_ACCESS_TOKEN";

export function addToken(token) {
    return {
        type: ADD_ACCESS_TOKEN,
        payload: token
    }
}

export function removeToken() {
    return {
        type: REMOVE_ACCESS_TOKEN,
        payload: null
    }
}