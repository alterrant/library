import classNames from 'classnames';

import { Close, Warning, PositiveSignal } from 'shared/ui';

import styles from './warnings.module.css';

type ErrorsProps = {
  handleClose: () => void;
  warningText: string;
  isNegative?: boolean;
};

export const Warnings = ({ handleClose, warningText, isNegative = true }: ErrorsProps) => {
  const wrapperClassName = classNames(
    styles.wrapper,
    isNegative ? styles.negative : styles.positive
  );

  return (
    <div className={wrapperClassName}>
      {isNegative ? <Warning className={styles.warning} /> : <PositiveSignal />}
      <p>{warningText}</p>
      <Close onClick={handleClose} className={styles.close} />
    </div>
  );
};
