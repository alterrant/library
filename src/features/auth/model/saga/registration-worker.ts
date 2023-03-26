import axios from 'axios';
import { call, put } from 'redux-saga/effects';

import { AUTH_API, axiosInstance } from 'shared/api';
import { ErrorMessages } from 'shared/lib';
import { RegistrationActionType } from '../../lib';
import { setError, setSuccess } from '../slice';

export function* registrationWorker({ payload }: RegistrationActionType) {
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
