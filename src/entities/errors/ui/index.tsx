import { ErrorMessages } from '../../../shared/lib';
import { Close, Warning } from '../../../shared/ui';

import styles from './errors.module.css';

type ErrorsProps = {
    handleClose: () => void;
};

export const Errors = ({ handleClose }: ErrorsProps) => (
    <div className={styles.errorsWrapper} data-test-id='error' >
        <Warning className={styles.warning} />
        <p>{ErrorMessages.RELOAD_PAGE}</p>
        <Close onClick={handleClose} className={styles.close}/>
    </div>
);
