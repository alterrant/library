import { call, put, takeLatest } from 'redux-saga/effects';

import { getBooks, setBooks, setBooksError } from '.';
import { BooksTypes } from '../lib';
import { axiosInstance, BOOKS_API } from '../../../shared/api';
import { ErrorMessages } from '../../../shared/lib';

function* worker() {
  try {
    const { data } = yield call(axiosInstance.get, BOOKS_API.books);

    yield put(setBooks(data as BooksTypes));
  } catch (e) {
    yield put(setBooksError(ErrorMessages.RELOAD_PAGE));
  }
}

export function* booksWatcher() {
  yield takeLatest(getBooks.type, worker);
}
