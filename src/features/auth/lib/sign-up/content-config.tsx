import { MessagesTemplateConfigTypes } from 'shared/lib';
import { DATA_NOT_SAVED, ENTRY, REPEAT } from '../config';
// SUCCESS_CONSTANTS
const SUCCESS_TITLE = 'Регистрация успешна';
const SUCCESS_MESSAGE = `Регистрация прошла успешно. Зайдите в личный кабинет, используя свои логин и пароль`;
const SUCCESS_BUTTON_TEXT = ENTRY;
// ERRORS_CONSTANTS
const ERROR_TITLE = DATA_NOT_SAVED;

const EXIST_ERROR_MESSAGE = `Такой логин или e-mail уже записан в системе. Попробуйте зарегистрироваться по другому логину или e-mail`;
const EXIST_ERROR_BUTTON_TEXT = 'назад к регистрации';

const ERROR_MESSAGE = `Что-то пошло не так и ваша регистрация не завершилась. Попробуйте ещё раз`;
const ERROR_BUTTON_TEXT = REPEAT;
// CONFIGS
export const SUCCESS: MessagesTemplateConfigTypes = {
  title: SUCCESS_TITLE,
  message: SUCCESS_MESSAGE,
  buttonText: SUCCESS_BUTTON_TEXT,
};
export const EXIST_ERROR: MessagesTemplateConfigTypes = {
  title: ERROR_TITLE,
  message: EXIST_ERROR_MESSAGE,
  buttonText: EXIST_ERROR_BUTTON_TEXT,
};
export const ERRORS: MessagesTemplateConfigTypes = {
  title: ERROR_TITLE,
  message: ERROR_MESSAGE,
  buttonText: ERROR_BUTTON_TEXT,
};
