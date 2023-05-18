import classNames from 'classnames';

import { Button } from 'shared/ui';
import { LOAD_MORE_BOOKS } from '../lib';

import styles from './load-more-books.module.css';
import buttonStyles from '../../../shared/lib/css/button-styles.module.css'

type LoadMoreBooksProps = {
  loadBooksHandler: () => void;
};

export const LoadMoreBooks = ({ loadBooksHandler }: LoadMoreBooksProps) => (
  <Button onClick={loadBooksHandler} buttonText={LOAD_MORE_BOOKS} classButton={classNames(styles.button, buttonStyles.button)} />
);
