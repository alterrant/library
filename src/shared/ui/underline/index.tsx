import classNames from 'classnames';

import styles from './underline.module.css';

type UnderlineProps = {
    underlineClass?: string;
}

export const Underline = ({ underlineClass }: UnderlineProps) => (
    <div className={classNames(styles.underline, underlineClass)} />
);
