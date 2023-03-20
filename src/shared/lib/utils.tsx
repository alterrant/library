import { BASE_URL, Nullable } from '.';

export const getDate = (
  dateString: Nullable<string> | undefined,
  timeFormatOptions: Intl.DateTimeFormatOptions
) => {
  const date = dateString ? new Date(dateString) : new Date();

  return new Intl.DateTimeFormat('ru', timeFormatOptions).format(date);
};

export const checkObjectEmpty = (obj: Record<string, any>) => Object.keys(obj).length === 0;

export const getImageSrc = (url: string) => `${BASE_URL}${url}`;

export const getFullName = (firstName: string, secondName: string) => `${firstName} ${secondName}`;
// для match нужно двойное экранирование. Первую \ съедают ''
const shieldedValues = /[/\-\\^$*+?.()|[\]{}]/g;

export const getMatchShieldedRegExp = (filterString: string) => {
  const replacedString = filterString.replace(shieldedValues, '\\$&');

  return new RegExp(replacedString, 'gi');
};

// экранируем спец симовлы
export const getRegExp = (filterString: string) => {
  const replacedString = filterString.replace(shieldedValues, '$&');

  return new RegExp(replacedString, 'gi');
};

export const getMatches = (string: string, filter: string | string[]) => {
  const getSubstringMatches = (subString: string) => {
    const subStringRegEpx = getMatchShieldedRegExp(subString);

    return string.match(subStringRegEpx);
  };

  try {
    // заполняем массив совпадениями от каждой подстроки фильтра
    if (Array.isArray(filter)) {
      const array: string[] = [];

      filter.forEach((subString) => {
        const matchesArray = getSubstringMatches(subString);

        if (matchesArray) array.push(...matchesArray);
      });

      return array.length ? array : null;
    }

    return getSubstringMatches(filter);
  } catch {
    return null;
  }
};

export const toISOStringWithTimezone = (date: Date) => {
  const tzOffset = -date.getTimezoneOffset();
  const diff = tzOffset >= 0 ? '+' : '-';
  const pad = (n: number) => `${Math.floor(Math.abs(n))}`.padStart(2, '0');

  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(
    date.getHours()
  )}:${pad(date.getMinutes())}:${pad(date.getSeconds())}${diff}${pad(tzOffset / 60)}:${pad(
    tzOffset % 60
  )}`;
};
