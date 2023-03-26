import { getSubstringMatches } from './get-substring-matches';

export const getMatches = (string: string, filter: string | string[]) => {
  try {
    // заполняем массив совпадениями от каждой подстроки фильтра
    if (Array.isArray(filter)) {
      const array: string[] = [];

      filter.forEach((subString) => {
        const matchesArray = getSubstringMatches(subString, string);

        if (matchesArray) array.push(...matchesArray);
      });

      return array.length ? array : null;
    }

    return getSubstringMatches(filter, string);
  } catch {
    return null;
  }
};
