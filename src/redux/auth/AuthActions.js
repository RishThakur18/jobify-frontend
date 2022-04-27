export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_REQUEST_SUCCESS = "LOGIN_REQUEST_SUCCESS";
export const LOGIN_REQUEST_ERROR = "LOGIN_REQUEST_ERROR";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_REQUEST_SUCCESS = "LOGOUT_REQUEST_SUCCESS";
export const LOGOUT_REQUEST_ERROR = "LOGOUT_REQUEST_ERROR";

export function loginRequest() {
    return {
        type: LOGIN_REQUEST,
        payload: null
    }
}

export function logoutRequest() {
    return {
        type: LOGOUT_REQUEST,
        paylaod: null
    }
}

