import axios from 'axios';
import { call, delay, put, select } from 'redux-saga/effects';

import { BookInteractionsLib } from 'features/book-interactions';
import { UserModel } from 'entities/user';
import { axiosInstance, UPLOAD_PHOTOS_URL, USERS_API } from 'shared/api';
import { ErrorMessages } from 'shared/lib';
import { configureChangeUserPayload, findUploadedFile } from 'features/profile/lib';
import { UploadAvatarTypes } from 'features/profile/lib/types';
import { resetState, setError, setSuccess } from '../slice';

const { me, userIdSelector } = UserModel;
const successMessage = BookInteractionsLib.SuccessMessages.PHOTO_SAVED;
const errorMessage = ErrorMessages.FETCHING_UPLOAD_ERROR;

type UploadAvatarActionType = UploadAvatarTypes.UploadAvatarActionType;
type UploadAvatarResponseType = UploadAvatarTypes.UploadAvatarResponseType;

export function* uploadAvatarWorker({ payload }: UploadAvatarActionType) {
  try {
    const { data }: UploadAvatarResponseType = yield call(axiosInstance.post, UPLOAD_PHOTOS_URL, payload);

    const uploadedFileInfo = findUploadedFile(data);

    if (uploadedFileInfo) {
      const { id: fileIdInRemoteStorage } = uploadedFileInfo;
      const changeUserPayload = configureChangeUserPayload(fileIdInRemoteStorage);

      const userId: number = yield select(userIdSelector);

      yield call(axiosInstance.put, USERS_API.changeUserInfo(userId), changeUserPayload);

      yield put(setSuccess(successMessage));
      yield put(me());

      yield delay(5000);

      yield put(resetState());
    }
  } catch {
    yield put(setError(errorMessage));

    yield delay(5000);
    yield put(resetState());
  }
}
