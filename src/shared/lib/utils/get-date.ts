import { Nullable } from '../types';

export const getDate = (dateString: Nullable<string> | undefined, timeFormatOptions: Intl.DateTimeFormatOptions) => {
  const date = dateString ? new Date(dateString) : new Date();

  return new Intl.DateTimeFormat('ru', timeFormatOptions).format(date);
};
