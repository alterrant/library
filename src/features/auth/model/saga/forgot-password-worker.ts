import axios from 'axios';
import { call, put } from 'redux-saga/effects';

import { ErrorMessages } from 'shared/lib';
import { AUTH_API, axiosInstance } from 'shared/api';
import { ForgotPassAttemptActionType } from '../../lib';
import { setError, setSuccess } from '../slice';

export function* forgotPasswordWorker({ payload }: ForgotPassAttemptActionType) {
  try {
    yield call(axiosInstance.post, AUTH_API.forgotPass, payload);

    yield put(setSuccess());
  } catch (e) {
    if (axios.isAxiosError(e)) {
      yield put(setError(e.message));
    } else yield put(setError(ErrorMessages.FETCHING_FORGOT_PASS_ERROR));
  }
}
