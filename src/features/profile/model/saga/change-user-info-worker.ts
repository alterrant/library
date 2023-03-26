import { call, put, select } from 'redux-saga/effects';

import { BookInteractionsLib } from 'features/book-interactions';
import { UserLib, UserModel } from 'entities/user';
import { axiosInstance, USERS_API } from 'shared/api';
import { ErrorMessages, resetState } from 'shared/lib';
import { resetState as resetStateActionCreator, setError, setSuccess } from '../slice';
import { ChangeUserInfoTypes } from '../../lib/types';

export function* changeUserInfoWorker({ payload }: ChangeUserInfoTypes.ChangeUserInfoActionType) {
  const successMessage = BookInteractionsLib.SuccessMessages.CHANGES_SAVED;
  const errorMessage = ErrorMessages.CHANGES_NOT_SAVED;
  const { me, userSelector } = UserModel;

  try {
    const { user }: { user: UserLib.UserType } = yield select(userSelector);

    yield call(axiosInstance.put, USERS_API.changeUserInfo(user.id), payload);

    yield put(setSuccess(successMessage));
    yield put(me());

    yield resetState(resetStateActionCreator);
  } catch (e) {
    yield put(setError(errorMessage));

    yield resetState(resetStateActionCreator);
  }
}
