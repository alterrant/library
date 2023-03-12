import { LinkedTextWithArrowType, ORIENTATION } from 'shared/lib';
import { NOT_REGISTERED, REGISTRATION_TEXT, REGISTRATION_PATH } from '../config';

export const TITLE = 'Bход в личный кабинет';
export const FORGOT_TEXT = 'Забыли логин или пароль?';
export const RESTORE = 'Восстановить?';
export const RESTORE_ACCOUNT_PATH = '../forgot-pass';
export const SUBMIT_TEXT = 'Вход';
export const REGISTRATION_INFO = NOT_REGISTERED;

export const formFooterConfig: LinkedTextWithArrowType = {
    path: REGISTRATION_PATH,
    text: REGISTRATION_TEXT,
    orientation: ORIENTATION.RIGHT
};
