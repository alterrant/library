import axios from 'axios';
import { call, put } from 'redux-saga/effects';

import { AUTH_API, axiosInstance } from 'shared/api';
import { ErrorMessages } from 'shared/lib';
import { ResetPassAttemptActionType } from '../../lib';
import { setError, setSuccess } from '../slice';

export function* resetPasswordWorker({ payload }: ResetPassAttemptActionType) {
  try {
    yield call(axiosInstance.post, AUTH_API.resetPass, payload);

    yield put(setSuccess());
  } catch (e) {
    if (axios.isAxiosError(e)) {
      yield put(setError(e.message));
    } else yield put(setError(ErrorMessages.FETCHING_RESET_PASS_ERROR));
  }
}
