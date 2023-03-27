import axios from 'axios';

import { call, put } from 'redux-saga/effects';
import { ErrorMessages, TOKEN } from 'shared/lib';
import { AUTH_API, axiosInstance } from 'shared/api';
import { setError, setSuccess } from '../slice';
import { AuthorisationActionType } from '../../lib';

export function* authorisationWorker({ payload }: AuthorisationActionType) {
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
