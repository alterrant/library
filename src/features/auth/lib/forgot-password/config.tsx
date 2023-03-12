import {
    NOT_REGISTERED,
    REGISTRATION_TEXT,
    REGISTRATION_PATH,
    RECOVERY_PASSWORD_TITLE
} from '../config';
import { LinkedTextWithArrowType, ORIENTATION } from '../../../../shared/lib';

export const TITLE = RECOVERY_PASSWORD_TITLE;

export const INPUT_HELPER = `На это email  будет отправлено письмо с инструкциями по восстановлению пароля`
export const SUBMIT_TEXT = 'восстановить';
export const REGISTRATION_INFO = NOT_REGISTERED;

export const formFooterConfig: LinkedTextWithArrowType = {
    path: REGISTRATION_PATH,
    text: REGISTRATION_TEXT,
    orientation: ORIENTATION.RIGHT
};
