import {BASE_URL, Nullable} from ".";

export const getDate = (
    dateString: Nullable<string> | undefined,
    timeFormatOptions: Intl.DateTimeFormatOptions
) => {
    const date = dateString ? new Date(dateString) : new Date;

    return new Intl.DateTimeFormat('ru', timeFormatOptions).format(date);
};

export const getImageSrc = (url: string) => `${BASE_URL}${url}`;

export const getFullName = (firstName: string, secondName: string) => `${firstName} ${secondName}`;

export const getMatches = (string: string, subString: string) => {
    try {
        const subStringRegEpx = new RegExp(subString, 'ig');

        return string.match(subStringRegEpx);
    } catch {
        return null;
    }
};
