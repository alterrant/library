import classNames from 'classnames';
import { ReactNode } from 'react';
import { Nullable } from '../../../lib';

import styles from './profile-section-template.module.css';

type FormTemplateProps = {
  title: string;
  helper: string;
  maskTitle?: string;
  maskSubtitle?: Nullable<string>;
  isEmpty?: boolean;
  isExpired?: boolean;
  children?: ReactNode;
};

export const ProfileSection = ({
  title,
  helper,
  maskTitle,
  maskSubtitle,
  isEmpty = false,
  isExpired,
  children,
}: FormTemplateProps) => {
  const isMask = isEmpty || isExpired;
  const isWarning = !isEmpty && isExpired;

  const maskClassName = classNames(isMask && styles.mask, isWarning && styles.warning);

  return (
    <div className={styles.wrapper}>
      <div className={styles.description}>
        <p className={styles.title}>{title}</p>
        <p className={styles.helper}>{helper}</p>
      </div>

      <div className={styles.book}>
        {children}
        {isMask && (
          <div className={maskClassName}>
            <p className={styles.maskTitle}>{maskTitle}</p>
            {maskSubtitle && <p className={styles.maskSubtitle}>{maskSubtitle}</p>}
          </div>
        )}
      </div>
    </div>
  );
};
