import {BASE_URL, Nullable} from ".";

export const getDate = (dateString: Nullable<string> | undefined, timeFormatOptions: Intl.DateTimeFormatOptions) => {
    const date = dateString ? new Date(dateString) : new Date;

    return new Intl.DateTimeFormat('ru', timeFormatOptions).format(date);
};

export const getImageSrc = (url: string) => `${BASE_URL}${url}`;

export const getFullName = (firstName: string, secondName: string) => `${firstName} ${secondName}`;
