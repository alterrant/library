import { UploadAvatarTypes } from '../../lib/types';
import { uploadAvatar } from '../../lib/configs';

const { INITIAL_FILE, INITIAL_FILE_ERROR, WRONG_FILE_TYPE, allowedFileTypes } = uploadAvatar;

export const uploadFileHandler = (
  event: UploadAvatarTypes.FileInputEventType,
  setFile: UploadAvatarTypes.SetUploadFileType,
  setError: UploadAvatarTypes.SetUploadErrorType
) => {
  const selectFile = event.currentTarget.files![0];

  if (selectFile && allowedFileTypes.includes(selectFile.type)) {
    const formData = new FormData();

    formData.append('files', selectFile);

    // const serializedFormData = JSON.stringify(Object.fromEntries(formData));

    setFile(formData);
    setError(INITIAL_FILE_ERROR);
  } else {
    setFile(INITIAL_FILE);
    setError(WRONG_FILE_TYPE);
  }
};
