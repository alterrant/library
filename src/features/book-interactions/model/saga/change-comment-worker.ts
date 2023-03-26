import { call, put, select } from 'redux-saga/effects';

import { BookLib, BookModel } from 'entities/book';
import { ErrorMessages, resetState } from 'shared/lib';
import { axiosInstance, COMMENTS_API } from 'shared/api';
import { ChangeCommentPayloadType, modelsHelper, SuccessMessages } from '../../lib';
import { resetState as resetStateActionCreator, setError, setSuccess } from '../slice';

export function* changeCommentWorker({ payload }: ChangeCommentPayloadType) {
  const { getBook, me } = modelsHelper();
  const { book }: BookLib.BookStateTypes = yield select(BookModel.bookSelector);

  try {
    if (payload.commentId)
      yield call(axiosInstance.put, COMMENTS_API.changeComment(payload.commentId), payload.commentPayload);

    yield put(setSuccess(SuccessMessages.EDIT_REVIEW));

    if (book.id) yield put(getBook(book.id));
    yield put(me());

    yield resetState(resetStateActionCreator);
  } catch {
    yield put(setError(ErrorMessages.CHANGES_NOT_SAVED));

    yield resetState(resetStateActionCreator);
  }
}
