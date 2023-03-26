import { call, put, takeLatest } from 'redux-saga/effects';

import { axiosInstance, BOOKS_API } from 'shared/api';
import { ErrorMessages } from 'shared/lib';
import { getBook, setBook, setBookError, sortReviews } from '.';
import { BookInfoTypes, GetBookPayloadType } from '../lib';

function* worker({ payload: id }: GetBookPayloadType) {
  try {
    const { data } = yield call(axiosInstance.get, BOOKS_API.book(id));

    yield put(setBook(data as BookInfoTypes));
    yield put(sortReviews())
  } catch {
    yield put(setBookError(ErrorMessages.RELOAD_PAGE));
  }
}

export function* bookWatcher() {
  yield takeLatest(getBook.type, worker);
}
