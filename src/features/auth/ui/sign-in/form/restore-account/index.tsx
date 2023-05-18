import { NavLink } from 'react-router-dom';

import { ErrorMessages } from 'shared/lib';
import { signInConfig } from '../../../../lib';

import styles from './sign-in-restore-account.module.css';

type RestoreAccountProps = {
  isError: boolean;
  linkHandler: () => void;
};

export const RestoreAccount = ({ isError, linkHandler }: RestoreAccountProps) => (
  <>
    {isError ? (
      <div className={styles.errors}>
        <p>{ErrorMessages.INVALID_AUTHORISATION}</p>
        <NavLink to={signInConfig.RESTORE_ACCOUNT_PATH}>{signInConfig.RESTORE}</NavLink>
      </div>
    ) : (
      <NavLink onClick={linkHandler} className={styles.link} to={signInConfig.RESTORE_ACCOUNT_PATH}>
        {signInConfig.FORGOT_TEXT}
      </NavLink>
    )}
  </>
);
