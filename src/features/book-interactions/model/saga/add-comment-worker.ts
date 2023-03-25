import { call, put, select } from 'redux-saga/effects';

import { BookLib, BookModel } from 'entities/book';
import { axiosInstance, COMMENTS_API } from 'shared/api';
import { ErrorMessages } from 'shared/lib';
import { resetState } from './reset-state';
import { setError, setSuccess } from '../slice';
import { AddCommentPayloadType, modelsHelper, SuccessMessages } from '../../lib';

export function* addCommentWorker({ payload }: AddCommentPayloadType) {
  const { getBook, me } = modelsHelper();
  const { book }: BookLib.BookStateTypes = yield select(BookModel.bookSelector);

  try {
    yield call(axiosInstance.post, COMMENTS_API.addComment, payload);

    yield put(setSuccess(SuccessMessages.ADD_COMMENT));

    if (book.id) yield put(getBook(book.id));
    yield put(me());

    yield resetState();
  } catch {
    yield put(setError(ErrorMessages.FETCHING_COMMENT_ERROR));

    yield resetState();
  }
}
