import { ERROR_MESSAGES } from "../../shared/lib";
import {Close, Warning} from "../../shared/ui";

import styles from './errors.module.css';

type ErrorsProps = {
    handleClose: () => void;
};

export const Errors = ({ handleClose }: ErrorsProps) => (
    <div className={styles.errorsWrapper} data-test-id='error' >
        <Warning className={styles.warning} />
        <p>{ERROR_MESSAGES.RELOAD_PAGE}</p>
        <Close onClick={handleClose} className={styles.close}/>
    </div>
);
