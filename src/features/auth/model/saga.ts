import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';

import { AUTH_API, axiosInstance } from 'shared/api';
import { ErrorMessages, TOKEN } from 'shared/lib';
import { authorisation, forgotPassAttempt, registration, resetPassAttempt, setError, setSuccess } from '.';
import {
  AuthorisationActionType,
  ForgotPassAttemptActionType,
  RegistrationActionType,
  ResetPassAttemptActionType,
} from '../lib';

function* authorisationWorker({ payload }: AuthorisationActionType) {
  try {
    const { data } = yield call(axiosInstance.post, AUTH_API.auth, payload);

    localStorage.setItem(TOKEN, data.jwt);

    yield put(setSuccess());
  } catch (e) {
    if (axios.isAxiosError(e)) {
      const { response } = e;

      if (response?.status === 400) {
        yield put(setError(ErrorMessages.INVALID_AUTHORISATION));
      } else yield put(setError(e.message));
    } else yield put(setError(ErrorMessages.RELOAD_PAGE));
  }
}
function* registrationWorker({ payload }: RegistrationActionType) {
  try {
    yield call(axiosInstance.post, AUTH_API.register, payload);

    yield put(setSuccess());
  } catch (e) {
    if (axios.isAxiosError(e)) {
      const { response } = e;

      if (response?.status === 400) yield put(setError(ErrorMessages.USER_EXIST));
      else yield put(setError(e.message));
    } else yield put(setError(ErrorMessages.RELOAD_PAGE));
  }
}

function* forgotPassWorker({ payload }: ForgotPassAttemptActionType) {
  try {
    yield call(axiosInstance.post, AUTH_API.forgotPass, payload);

    yield put(setSuccess());
  } catch (e) {
    if (axios.isAxiosError(e)) {
      yield put(setError(e.message));
    } else yield put(setError(ErrorMessages.FETCHING_FORGOT_PASS_ERROR));
  }
}

function* resetPassWorker({ payload }: ResetPassAttemptActionType) {
  try {
    yield call(axiosInstance.post, AUTH_API.resetPass, payload);

    yield put(setSuccess());
  } catch (e) {
    if (axios.isAxiosError(e)) {
      yield put(setError(e.message));
    } else yield put(setError(ErrorMessages.FETCHING_RESET_PASS_ERROR));
  }
}

export function* authWatcher() {
  yield takeLatest(authorisation.type, authorisationWorker);
  yield takeLatest(registration.type, registrationWorker);
  yield takeLatest(forgotPassAttempt.type, forgotPassWorker);
  yield takeLatest(resetPassAttempt.type, resetPassWorker);
}
