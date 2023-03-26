import { call, put, takeLatest } from 'redux-saga/effects';

import { axiosInstance, USERS_API } from 'shared/api';
import { ErrorMessages } from 'shared/lib';
import { me, setError, setUser } from '.';
import { UserType } from '../lib';

function* meWorker() {
  try {
    const { data } = yield call(axiosInstance.get, USERS_API.me);

    yield put(setUser(data as UserType));
  } catch {
    yield put(setError(ErrorMessages.FETCHING_ME_ERROR));
  }
}

export function* userWatcher() {
  yield takeLatest(me.type, meWorker);
}
