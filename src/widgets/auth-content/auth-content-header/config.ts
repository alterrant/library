import { LinkedTextWithArrowType, ORIENTATION } from '../../../shared/lib';

const AUTHORISATION_PATH = 'auth';
const AUTHORISATION_TEXT = 'Bход в личный кабинет';

export const headerConfig: LinkedTextWithArrowType = {
    path: AUTHORISATION_PATH,
    text: AUTHORISATION_TEXT,
    orientation: ORIENTATION.LEFT
};
