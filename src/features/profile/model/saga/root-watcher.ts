import { takeLatest } from 'redux-saga/effects';

import { uploadAvatarWorker } from './upload-avatar-worker';
import { changeUserInfoWorker } from './change-user-info-worker';
import { uploadAvatar } from '..';
import { changeUserInfo } from '../slice';

export function* userWatcher() {
  yield takeLatest(uploadAvatar.type, uploadAvatarWorker);
  yield takeLatest(changeUserInfo.type, changeUserInfoWorker);
}
