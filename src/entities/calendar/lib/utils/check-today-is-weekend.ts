import { checkIsWeekend } from './check-is-weekend';

export const checkTodayIsWeekend = () => {
  const today = new Date();
  const todayNumberInWeek = today.getDay() + 1;

  return checkIsWeekend(todayNumberInWeek);
};
