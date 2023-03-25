import axios from 'axios';
import { call, put, select } from 'redux-saga/effects';

import { BooksModel, BooksTypes } from 'entities/books';
import { BookLib, BookModel } from 'entities/book';
import { axiosInstance } from 'shared/api';
import { BOOKING_API } from 'shared/api/booking';
import { ErrorMessages } from 'shared/lib';
import { resetState } from './reset-state';
import { setError, setSuccess } from '../slice';
import { ChangeBookingDatePayloadType, modelsHelper, SuccessMessages } from '../../lib';

export function* changeBookingDateWorker({ payload }: ChangeBookingDatePayloadType) {
  const { getBook, getBooks } = modelsHelper();
  const { book }: BookLib.BookStateTypes = yield select(BookModel.bookSelector);
  const books: BooksTypes = yield select(BooksModel.allBooksSelector);

  try {
    yield call(axiosInstance.put, BOOKING_API.changeBooking(payload.bookingId), payload.bookingPayload);

    if (book.id) yield put(getBook(book.id));
    if (books.length) yield put(getBooks());

    yield put(setSuccess(SuccessMessages.CHANGES_SAVED));

    yield resetState();
  } catch {
    yield put(setError(ErrorMessages.CHANGES_NOT_SAVED));

    yield resetState();
  }
}
