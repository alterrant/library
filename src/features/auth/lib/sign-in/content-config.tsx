import { MessagesTemplateConfigTypes } from "../../../../shared/lib";
// ERRORS_CONSTANTS
const ERROR_TITLE = 'Вход не выполнен';
const ERROR_MESSAGE = `Что-то пошло не так. Попробуйте ещё раз`;
const ERROR_BUTTON_TEXT = 'повторить';
// CONFIG
export const ERRORS: MessagesTemplateConfigTypes = {
    title: ERROR_TITLE,
    message: ERROR_MESSAGE,
    buttonText: ERROR_BUTTON_TEXT,
};
