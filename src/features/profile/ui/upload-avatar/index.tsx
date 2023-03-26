import { INPUT_TYPES } from 'shared/lib';
import { ReactComponent as UploadPhoto } from './assets/white-upload-photo.svg';
import { handlers, hooks } from '../../model';
import { configs } from '../../lib';
import { UploadAvatarTypes } from '../../lib/types';

import styles from './upload-avatar.module.css';

const { uploadFileHandler } = handlers.uploadAvatar;
const { inputName } = configs.uploadAvatar;

export const UploadAvatar = () => {
  const { setFile, setError } = hooks.useUploadAvatar();

  const handleChange = (event: UploadAvatarTypes.FileInputEventType) => uploadFileHandler(event, setFile, setError);

  return (
    <div className={styles.wrapper}>
      <input className={styles.input} type={INPUT_TYPES.FILE} onChange={handleChange} id={inputName} />
      <label className={styles.label} htmlFor={inputName}>
        <UploadPhoto className={styles.svg} />
      </label>
    </div>
  );
};
