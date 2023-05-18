export const BASE_URL = 'https://library-cleverland-2jfze.ondigitalocean.app/';
export const TOKEN = 'token';

export const SHIELDED_VALUES = /[/\-\\^$*+?.()|[\]{}]/g;

export const MAX_RATING = 5;
export const EMPTY_RATING = 'ещё нет оценок';

export const ORANGE = 'rgba(255, 188, 31, 1)';

export const CARD_STYLES = {
  COLUMN: 'column',
  ROW: 'row',
} as const;

export const FONT_WEIGHT = {
  NORMAL: 'normal',
  BOLD: 'bold',
} as const;

export const INPUT_TYPES = {
  PASSWORD: 'password',
  EMAIL: 'email',
  TEXT: 'text',
  TEL: 'tel',
  FILE: 'file',
} as const;

export enum ORIENTATION {
  UP = 'up',
  RIGHT = 'right',
  DOWN = 'down',
  LEFT = 'left',
}

export enum ButtonTypes {
  BUTTON = 'button',
  SUBMIT = 'submit',
  RESET = 'reset',
}

export enum ResetPasswordFieldNames {
  PASSWORD = 'password',
  RETRY_PASSWORD = 'passwordConfirmation',
}

export enum PLACEHOLDERS {
  LOGIN = 'Логин',
  PASSWORD = 'Пароль',
  NEW_PASSWORD = 'Новый пароль',
  REPEAT_PASSWORD = 'Повторите пароль',
  IMAGINE_LOGIN = 'Придумайте логин для входа',
  FIRST_NAME = 'Имя',
  LAST_NAME = 'Фамилия',
  PHONE_NUMBER = 'Номер телефона',
  EMAIL = 'E-mail',
}
