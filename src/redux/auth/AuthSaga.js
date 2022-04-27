import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

import * as actions from "./AuthActions";
const baseUrl = "s"

function* signinRequest(action) {
    const API_URL = baseUrl.concat("signIn");
    const PARAMETERS = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    };

    let statusCode;

    try {
        const response = yield call(fetch, API_URL, PARAMETERS);
        statusCode = response.status;
        if (response.status === 200) {
            yield put({
                type: actions.LOGIN_REQUEST_SUCCESS,
                user: response.data
            });
        }
        else {
            yield put({
                type: actions.LOGIN_REQUEST_ERROR,
                error: response.data
            });
        }

    } catch (e) {
        yield put({
            type: actions.LOGIN_REQUEST_ERROR,
        });
    }
}

function* authSaga() {
    yield takeEvery(actions.LOGIN_REQUEST, signinRequest);
}

export default authSaga;

