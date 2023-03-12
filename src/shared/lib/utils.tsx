import {BASE_URL, Nullable} from ".";

export const getDate = (
    dateString: Nullable<string> | undefined,
    timeFormatOptions: Intl.DateTimeFormatOptions
) => {
    const date = dateString ? new Date(dateString) : new Date;

    return new Intl.DateTimeFormat('ru', timeFormatOptions).format(date);
};

export const checkObjectEmpty = (obj: Record<string, any>) => Object.keys(obj).length === 0;

export const getImageSrc = (url: string) => `${BASE_URL}${url}`;

export const getFullName = (firstName: string, secondName: string) => `${firstName} ${secondName}`;
// для match нужно двойное экранирование. Первую \ съедают ''
export const getMatchShieldedRegExp = (filterString: string) =>
    filterString.replace(/[/\-\\^$*+?.()|[\]{}]/g, '\\$&');

// экранируем спец симовлы
export const getRegExp = (filterString: string) =>
    filterString.replace(/[/\-\\^$*+?.()|[\]{}]/g, '\$&');

export const getMatches = (string: string, filter: string | string[]) => {
    const getSubstringMatches = (subString: string) => {
        const subStringRegEpx = getMatchShieldedRegExp(subString);

        return string.match(subStringRegEpx);
    }

    try { // заполняем массив совпадениями от каждой подстроки фильтра
        if (Array.isArray(filter)) {
            const array: string[] = [];

            filter.forEach((subString) => {
                const matchesArray = getSubstringMatches(subString);

                if (matchesArray) array.push(...matchesArray)
              });

            return array.length ? array : null;
        }

        return getSubstringMatches(filter);
    } catch {
        return null;
    }
};
