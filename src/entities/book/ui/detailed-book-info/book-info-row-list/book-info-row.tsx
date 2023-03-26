import { Fragment } from 'react';

import { translateInfoKeys } from '../../../lib/utils/translate-info-keys';

import styles from '../detailed-book-info.module.css';

type BookInfoRowProps = {
  prop: string;
  value: string | string[] | null;
};

export const BookInfoRow = ({ prop, value }: BookInfoRowProps) => {
  const rowValue = Array.isArray(value) ? value.join(', ') : value;

  return (
    <Fragment key={prop}>
      <p className={styles.infoKey}>{translateInfoKeys(prop)}</p>
      <p>{rowValue}</p>
    </Fragment>
  );
};
