import { DATA_NOT_SAVED, ENTRY, REPEAT } from "../config";
import { MessagesTemplateConfigTypes } from "../../../../shared/lib";
// SUCCESS_CONSTANTS
const SUCCESS_TITLE = 'Новые данные сохранены';
const SUCCESS_MESSAGE = 'Зайдите в личный кабинет, используя свои логин и новый пароль';
const SUCCESS_BUTTON_TEXT = ENTRY;
// ERRORS_CONSTANTS
const ERROR_TITLE = DATA_NOT_SAVED;
const ERROR_MESSAGE = 'Что-то пошло не так. Попробуйте ещё раз';
const ERROR_BUTTON_TEXT = REPEAT;
// CONFIGS
export const SUCCESS: MessagesTemplateConfigTypes = {
    title: SUCCESS_TITLE,
    message: SUCCESS_MESSAGE,
    buttonText: SUCCESS_BUTTON_TEXT,
};
export const ERRORS: MessagesTemplateConfigTypes = {
    title: ERROR_TITLE,
    message: ERROR_MESSAGE,
    buttonText: ERROR_BUTTON_TEXT,
};
