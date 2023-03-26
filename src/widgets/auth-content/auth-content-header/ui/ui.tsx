import { AuthModel } from 'features/auth';
import { LinkedTextWithArrow } from 'shared/ui';
import { headerConfig } from '../config';

import styles from './auth-content-header.module.css';

export const Header = () => {
  const { isSuccess, resetState, dispatch } = AuthModel.useForgotPassContent();
  const { path, text, orientation } = headerConfig;
  const clickHandler = () => dispatch(resetState);

  return (
    <>
      {!isSuccess && (
        <div className={styles.wrapper}>
          <LinkedTextWithArrow
            clickHandler={clickHandler}
            path={path}
            text={text}
            orientation={orientation}
          />
        </div>
      )}
    </>
  );
};
