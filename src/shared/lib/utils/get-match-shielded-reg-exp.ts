import { SHIELDED_VALUES } from '../config';

// для match нужно двойное экранирование. Первую \ съедают ''
export const getMatchShieldedRegExp = (filterString: string) => {
  const replacedString = filterString.replace(SHIELDED_VALUES, '\\$&');

  return new RegExp(replacedString, 'gi');
};
