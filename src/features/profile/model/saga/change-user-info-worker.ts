import { call, delay, put, select } from 'redux-saga/effects';

import { BookInteractionsLib } from 'features/book-interactions';
import { UserLib, UserModel } from 'entities/user';
import { axiosInstance, USERS_API } from 'shared/api';
import { ErrorMessages } from 'shared/lib';
import { resetState, setError, setSuccess } from '../slice';
import { ChangeUserInfoTypes } from '../../lib/types';

const { me, userSelector } = UserModel;
const successMessage = BookInteractionsLib.SuccessMessages.CHANGES_SAVED;
const errorMessage = ErrorMessages.CHANGES_NOT_SAVED;

export function* changeUserInfoWorker({ payload }: ChangeUserInfoTypes.ChangeUserInfoActionType) {
  try {
    const { user }: { user: UserLib.UserType } = yield select(userSelector);

    yield call(axiosInstance.put, USERS_API.changeUserInfo(user.id), payload);

    yield put(setSuccess(successMessage));
    yield put(me());

    yield delay(5000);
    yield put(resetState());
  } catch (e) {
    yield put(setError(errorMessage));

    yield delay(5000);
    yield put(resetState());
  }
}
