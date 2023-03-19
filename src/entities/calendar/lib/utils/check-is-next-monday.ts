import { checkDateIsEqual } from './check-date-is-equal';
import { getNextMonday } from './get-next-monday';

export const checkIsNextMonday = (date: Date) => {
  const nextMonday = getNextMonday();

  return checkDateIsEqual(nextMonday, date);
};
