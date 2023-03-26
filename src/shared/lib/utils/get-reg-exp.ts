// экранируем спец симовлы
import { SHIELDED_VALUES } from '../config';

export const getRegExp = (filterString: string) => {
  const replacedString = filterString.replace(SHIELDED_VALUES, '$&');

  return new RegExp(replacedString, 'gi');
};
