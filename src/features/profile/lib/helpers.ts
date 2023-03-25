import { UploadAvatarTypes } from './types';

export const findUploadedFile = (data: UploadAvatarTypes.UploadedFilesType) => data.find((item) => item.id);

export const configureChangeUserPayload = (fileIdInRemoteStorage: number) => ({ avatar: fileIdInRemoteStorage });
