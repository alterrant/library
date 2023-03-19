import { checkIsToday } from './check-is-today';
import { checkTodayIsWeekend } from './check-today-is-weekend';
import { checkTodayIsFriday } from './check-today-is-friday';
import { checkIsTomorrow } from './check-is-tomorrow';
import { checkIsNextMonday } from './check-is-next-monday';

export const checkAvailableDay = (day: any) => {
  const isToday = checkIsToday(day.date);
  const isTomorrow = checkIsTomorrow(day.date);

  const isTodayWeekend = checkTodayIsWeekend();
  const isTodayFriday = checkTodayIsFriday();
  const isNextMonday = checkIsNextMonday(day.date);

  if (isTodayFriday) {
    return isToday || isNextMonday;
  }
  if (isTodayWeekend) {
    return isNextMonday;
  }
  if (!isTodayFriday && !isTodayWeekend) {
    return isToday || isTomorrow;
  }
};
