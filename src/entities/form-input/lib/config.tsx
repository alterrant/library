import { INPUT_TYPES } from 'shared/lib';
import { PasswordConfigTypes } from './types';
import eyeOpen from '../ui/assets/eye-open.svg';
import eyeClosed from '../ui/assets/eye-closed.svg';

export const visiblePasswordConfig: PasswordConfigTypes = {
  type: INPUT_TYPES.TEXT,
  alt: 'Скрыть пароль',
  img: eyeOpen as string,
};
export const hiddenPasswordConfig: PasswordConfigTypes = {
  type: INPUT_TYPES.PASSWORD,
  alt: 'Показать пароль',
  img: eyeClosed as string,
};

export const phoneMask = [
  '+',
  '3',
  '7',
  '5',
  ' ',
  '(',
  /\d/,
  /\d/,
  ')',
  ' ',
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
];
