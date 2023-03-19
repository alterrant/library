import { NavLink } from 'react-router-dom';

import { signInConfig } from '../../../../lib';
import { ErrorMessages } from '../../../../../../shared/lib';

import styles from './sign-in-restore-account.module.css';

type RestoreAccountProps = {
  isError: boolean;
};

export const RestoreAccount = ({ isError }: RestoreAccountProps) => (
  <>
    {isError ? (
      <div className={styles.errors}>
        <p data-test-id='hint'>{ErrorMessages.INVALID_AUTHORISATION}</p>
        <NavLink to={signInConfig.RESTORE_ACCOUNT_PATH}>{signInConfig.RESTORE}</NavLink>
      </div>
    ) : (
      <NavLink className={styles.link} to={signInConfig.RESTORE_ACCOUNT_PATH}>
        {signInConfig.FORGOT_TEXT}
      </NavLink>
    )}
  </>
);
