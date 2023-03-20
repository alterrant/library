import axios from 'axios';
import { call, put, select, takeLatest } from 'redux-saga/effects';

import { sortReviews } from 'entities/book/model';
import { BooksModel, BooksTypes } from 'entities/books';
import { BookModel, BookLib } from 'entities/book';
import { addComment, booking, cancelBooking, changeBookingDate, setError, setSuccess } from '.';
import {
  addCommentHelper,
  AddCommentPayloadType,
  bookingHelper,
  BookingPayloadType,
  CancelBookingPayloadType,
  ChangeBookingDatePayloadType,
  SuccessMessages,
} from '../lib';
import { axiosInstance } from '../../../shared/api';
import { BookingResponseType, ErrorMessages, UpdateCommentResponseType } from '../../../shared/lib';
import { BOOKING_API } from '../../../shared/api/booking';
import { COMMENTS_API } from '../../../shared/api/comments';
import { AuthModel, AuthLib } from '../../auth';

// TODO: решить импорт из feature в feature (auth)
// TODO: убрать дублирование кода
function* bookingWorker({ payload }: BookingPayloadType) {
  try {
    const { data }: BookingResponseType = yield call(
      axiosInstance.post,
      BOOKING_API.bookingURL,
      payload
    );

    const bookId = +payload.data.book;

    const books: BooksTypes = yield select(BooksModel.allBooksSelector);
    const { user }: { user: AuthLib.UserType } = yield select(AuthModel.authSelector);
    const { book }: BookLib.BookStateTypes = yield select(BookModel.bookSelector);

    const { newBooking, updateBooksBooking, updateBookBooking } = bookingHelper(data, user, bookId);

    if (book.id) yield put(updateBookBooking(newBooking));
    if (books.length) yield put(updateBooksBooking(newBooking));

    yield put(setSuccess(SuccessMessages.BOOKING));
  } catch (e) {
    if (axios.isAxiosError(e)) yield put(setError(ErrorMessages.FETCHING_BOOKING_ERROR));
    else yield put(setError((e as Error).message));
  }
}
function* changeBookingDateWorker({ payload }: ChangeBookingDatePayloadType) {
  try {
    /* const { data }: BookingResponseType = yield call( */ // вернуть после тестов
    const data: BookingResponseType = yield call(
      axiosInstance.put,
      BOOKING_API.getChangeBookingDateURL(payload.bookingId),
      payload.attemptPayload
    );
    const bookId = +payload.attemptPayload.data.book;

    const books: BooksTypes = yield select(BooksModel.allBooksSelector);
    const { user }: { user: AuthLib.UserType } = yield select(AuthModel.authSelector);
    const { book }: BookLib.BookStateTypes = yield select(BookModel.bookSelector);

    /* const { newBooking, updateBooksBooking, updateBookBooking } = bookingHelper(data, user, bookId); */ // вернуть после тестов
    const { newBooking, updateBooksBooking, updateBookBooking } = bookingHelper(null, user, bookId);

    if (book.id) yield put(updateBookBooking(newBooking));
    if (books.length) yield put(updateBooksBooking(newBooking));

    yield put(setSuccess(SuccessMessages.CHANGES_SAVED));
  } catch (e) {
    if (axios.isAxiosError(e)) yield put(setError(ErrorMessages.CHANGES_NOT_SAVED));
    else yield put(setError((e as Error).message));
  }
}

function* cancelBookingWorker({ payload }: CancelBookingPayloadType) {
  try {
    yield call(axiosInstance.delete, BOOKING_API.getCancelBookingURL(payload.bookingId));

    const { bookId } = payload;

    const books: BooksTypes = yield select(BooksModel.allBooksSelector);
    const { user }: { user: AuthLib.UserType } = yield select(AuthModel.authSelector);
    const { book }: BookLib.BookStateTypes = yield select(BookModel.bookSelector);

    const { newBooking, updateBooksBooking, updateBookBooking } = bookingHelper(null, user, bookId);

    if (book.id) yield put(updateBookBooking(newBooking));
    if (books.length) yield put(updateBooksBooking(newBooking));

    yield put(setSuccess(SuccessMessages.CANCEL_BOOKING));
  } catch (e) {
    if (axios.isAxiosError(e)) yield put(setError(ErrorMessages.CANT_CANCEL_BOOKING));
    else yield put(setError((e as Error).message));
  }
}

function* addCommentWorker({ payload }: AddCommentPayloadType) {
  try {
    /*  const { data }: UpdateCommentResponseType = yield call( */ // вернуть после тестов
    const { data } = yield call(
      axiosInstance.post,
      COMMENTS_API.addCommentURL,
      payload
    );

    /* const { user }: { user: AuthLib.UserType } = yield select(AuthModel.authSelector);
     /!* const { newComment, updateComments } = addCommentHelper(data, user); *!/ // вернуть после тестов
    const { newComment, updateComments } = addCommentHelper(data.data, user);

    yield put(updateComments(newComment));
    yield put(sortReviews()); */
    yield put(setSuccess(SuccessMessages.ADD_COMMENT));

  } catch (e) {
    if (axios.isAxiosError(e)) yield put(setError(ErrorMessages.FETCHING_COMMENT_ERROR));
    else yield put(setError((e as Error).message));
  }
}

export function* modalsWatcher() {
  yield takeLatest(booking.type, bookingWorker);
  yield takeLatest(changeBookingDate.type, changeBookingDateWorker);
  yield takeLatest(cancelBooking.type, cancelBookingWorker);
  yield takeLatest(addComment.type, addCommentWorker);
}
