import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { PayloadAction } from "@reduxjs/toolkit";

import {
    setSuccess,
    me,
    registration,
    forgotPassAttempt,
    setError,
    resetPassAttempt
} from '.';
import { signInConfig, signUpConfig, forgotPassConfig, resetPassConfig } from '../lib';
import { axiosInstance, AUTH_API } from '../../../shared/api';
import { ErrorMessages, TOKEN } from '../../../shared/lib';

function* meWorker({ payload }: PayloadAction<signInConfig.Types.FormType>) {
    try {
        const { data } = yield call(axiosInstance.post, AUTH_API.authURL, payload);

        // yield put(setUser(data.user as UserType));

        localStorage.setItem(TOKEN, data.jwt);

        yield put(setSuccess());
    } catch (e) {
        if (axios.isAxiosError(e)) {
            const { response } = e;

            if(response?.status === 400 ) {
                yield put(setError(ErrorMessages.INVALID_AUTHORISATION));
            } else yield put(setError(e.message));
        }
        else yield put(setError(ErrorMessages.FETCHING_BOOKS_ERROR));
    }
}
function* registrationWorker({ payload }: PayloadAction<signUpConfig.Types.FormType>) {
    try {
        yield call(axiosInstance.post, AUTH_API.registerURL, payload);

        // yield put(setUser(data.user as UserType));
        yield put(setSuccess());
    } catch (e) {
        if (axios.isAxiosError(e)) {
            const { response } = e;

            if(response?.status === 400 ) yield put(setError(ErrorMessages.USER_EXIST));
            else yield put(setError(e.message));
        }
        else yield put(setError(ErrorMessages.FETCHING_REGISTRATION_ERROR));
    }
}

function* forgotPassWorker({ payload }: PayloadAction<forgotPassConfig.Types.FormType>) {
    try {
        yield call(axiosInstance.post, AUTH_API.forgotPassURL, payload);

        yield put(setSuccess());
    } catch (e) {
        if (axios.isAxiosError(e)) {
           yield put(setError(e.message));
        }
        else yield put(setError(ErrorMessages.FETCHING_FORGOT_PASS_ERROR));
    }
}

function* resetPassWorker({ payload }: PayloadAction<resetPassConfig.Types.FormType>) {
    try {
        yield call(axiosInstance.post, AUTH_API.resetPassURL, payload);

        yield put(setSuccess());
    } catch (e) {
        if (axios.isAxiosError(e)) {
            yield put(setError(e.message));
        }
        else yield put(setError(ErrorMessages.FETCHING_RESET_PASS_ERROR));
    }
}

export function* authWatcher() {
    yield takeLatest(me.type, meWorker);
    yield takeLatest(registration.type, registrationWorker);
    yield takeLatest(forgotPassAttempt.type, forgotPassWorker);
    yield takeLatest(resetPassAttempt.type, resetPassWorker);
}
