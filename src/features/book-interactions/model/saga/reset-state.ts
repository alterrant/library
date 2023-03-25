import { delay, put } from 'redux-saga/effects';

import { resetState as reset } from '../slice';

export function* resetState() {
  yield delay(5000);
  yield put(reset());
}
