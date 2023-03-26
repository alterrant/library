import { ActionCreator, AnyAction } from 'redux';
import { delay, put } from 'redux-saga/effects';

export function* resetState(reset: ActionCreator<AnyAction>, timeDelay = 5000) {
  yield delay(timeDelay);
  yield put(reset());
}
