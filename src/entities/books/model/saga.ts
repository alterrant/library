import { call, put, takeLatest } from 'redux-saga/effects';

import { axiosInstance, BOOKS_API } from 'shared/api';
import { ErrorMessages } from 'shared/lib';
import { getBooks, setBooks, setBooksError } from '.';
import { BooksTypes } from '../lib';

function* worker() {
  try {
    const { data } = yield call(axiosInstance.get, BOOKS_API.books);

    yield put(setBooks(data as BooksTypes));
  } catch {
    yield put(setBooksError(ErrorMessages.RELOAD_PAGE));
  }
}

export function* booksWatcher() {
  yield takeLatest(getBooks.type, worker);
}
