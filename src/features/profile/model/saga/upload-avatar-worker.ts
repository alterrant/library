import { call, put, select } from 'redux-saga/effects';

import { BookInteractionsLib } from 'features/book-interactions';
import { UserModel } from 'entities/user';
import { axiosInstance, UPLOAD_PHOTOS_URL, USERS_API } from 'shared/api';
import { ErrorMessages, resetState } from 'shared/lib';
import { configureChangeUserPayload, findUploadedFile } from '../../lib';
import { UploadAvatarTypes } from '../../lib/types';
import { resetState as resetStateActionCreator, setError, setSuccess } from '../slice';

type UploadAvatarActionType = UploadAvatarTypes.UploadAvatarActionType;

export function* uploadAvatarWorker({ payload }: UploadAvatarActionType) {
  const { me, userIdSelector } = UserModel;
  const successMessage = BookInteractionsLib.SuccessMessages.PHOTO_SAVED;
  const errorMessage = ErrorMessages.FETCHING_UPLOAD_ERROR;

  try {
    type UploadAvatarResponseType = UploadAvatarTypes.UploadAvatarResponseType;
    const { data }: UploadAvatarResponseType = yield call(axiosInstance.post, UPLOAD_PHOTOS_URL, payload);

    const uploadedFileInfo = findUploadedFile(data);

    if (uploadedFileInfo) {
      const { id: fileIdInRemoteStorage } = uploadedFileInfo;
      const changeUserPayload = configureChangeUserPayload(fileIdInRemoteStorage);

      const userId: number = yield select(userIdSelector);

      yield call(axiosInstance.put, USERS_API.changeUserInfo(userId), changeUserPayload);

      yield put(setSuccess(successMessage));
      yield put(me());

      yield resetState(resetStateActionCreator);
    }
  } catch {
    yield put(setError(errorMessage));

    yield resetState(resetStateActionCreator);
  }
}
