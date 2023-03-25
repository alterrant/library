import { useEffect, useState } from 'react';

import { useAppDispatch } from 'shared/lib';
import { uploadAvatar } from '../slice';
import { UploadAvatarTypes } from '../../lib/types';

export const useUploadAvatar = () => {
  type UploadFileType = UploadAvatarTypes.UploadFileType;
  type UploadErrorType = UploadAvatarTypes.UploadErrorType;

  const [file, setFile] = useState<UploadFileType>(null);
  const [error, setError] = useState<UploadErrorType>(null);
  const [useEffectState, setUseEffectState] = useState({ isFirstEffect: false });

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (file && useEffectState.isFirstEffect) {
      dispatch(uploadAvatar(file));
    }
    return () => setUseEffectState({ isFirstEffect: true });
  }, [file]);

  return {
    file,
    error,
    setFile,
    setError,
  };
};
