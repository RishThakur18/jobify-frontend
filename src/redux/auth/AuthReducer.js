import * as authActions from "./AuthActions";

const INITIAL_STATE = {
    isLoggedIn: false,
    loading: false,
    user: null,
    error: null
}

export default function authReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case authActions.LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case authActions.LOGIN_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                loggedIn: true,
                user: action.user
            };
        case authActions.LOGIN_REQUEST_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case authActions.LOGOUT_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case authActions.LOGOUT_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                loggedIn: false,
                user: {}
            }
        case authActions.LOGOUT_REQUEST_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error
            };

        default:
            return state
    }
}

