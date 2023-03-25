import { call, put, select } from 'redux-saga/effects';

import { BooksModel, BooksTypes } from 'entities/books';
import { BookLib, BookModel } from 'entities/book';
import { axiosInstance } from 'shared/api';
import { BOOKING_API } from 'shared/api/booking';
import { ErrorMessages } from 'shared/lib';
import { resetState } from './reset-state';
import { setError, setSuccess } from '../slice';
import { BookingPayloadType, modelsHelper, SuccessMessages } from '../../lib';

export function* bookingWorker({ payload }: BookingPayloadType) {
  const { getBook, getBooks } = modelsHelper();
  const { book }: BookLib.BookStateTypes = yield select(BookModel.bookSelector);
  const books: BooksTypes = yield select(BooksModel.allBooksSelector);

  try {
    yield call(axiosInstance.post, BOOKING_API.booking, payload);

    if (book.id) yield put(getBook(book.id));
    if (books.length) yield put(getBooks());

    yield put(setSuccess(SuccessMessages.BOOKING));

    yield resetState();
  } catch {
    yield put(setError(ErrorMessages.FETCHING_BOOKING_ERROR));

    yield resetState();
  }
}
