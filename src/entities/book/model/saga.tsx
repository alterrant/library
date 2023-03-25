import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';

import { getBook, setBook, setBookError, sortReviews } from '.';
import { BookInfoTypes, GetBookPayloadType } from '../lib';
import { axiosInstance, BOOKS_API } from '../../../shared/api';
import { ErrorMessages } from '../../../shared/lib';

function* worker({ payload: id }: GetBookPayloadType) {
  try {
    const { data } = yield call(axiosInstance.get, BOOKS_API.book(id));

    yield put(setBook(data as BookInfoTypes));
    yield put(sortReviews())
  } catch (e) {
    if (axios.isAxiosError(e)) yield put(setBookError(e.message));
    else yield put(setBookError(ErrorMessages.RELOAD_PAGE));
  }
}

export function* bookWatcher() {
  yield takeLatest(getBook.type, worker);
}
