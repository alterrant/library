import { useAppSelector } from 'shared/lib';
import { getHelloUserString } from '../../../lib';
import { userSelector } from '../../../model';

import styles from '../person-info.module.css';

type TitleProps = {
  isGreeting: boolean;
};

export const Title = ({ isGreeting }: TitleProps) => {
  const { user } = useAppSelector(userSelector);

  return isGreeting ? (
    <span className={styles.title}>{getHelloUserString(user.firstName)}</span>
  ) : (
    <>
      <span>
        {user.firstName}
        <br />
        {user.lastName}
      </span>
    </>
  );
};
