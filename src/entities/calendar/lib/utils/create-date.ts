import { DateType } from '../types';
import { getWeekNumber } from './get-week-number';

interface CreateDateParams {
  date?: Date | null;
}

export const createDate = (params?: CreateDateParams): DateType => {
  const d = params?.date ?? new Date();
  const dayNumber = d.getDate();
  const day = d.toLocaleDateString('ru-RU', { weekday: 'long' });
  const dayNumberInWeek = d.getDay() + 1;
  const dayShort = d.toLocaleDateString('ru-RU', { weekday: 'short' });
  const year = d.getFullYear();
  const yearShort = d.toLocaleDateString('ru-RU', { year: '2-digit' });
  const month = d.toLocaleDateString('ru-RU', { month: 'long' });
  const monthShort = d.toLocaleDateString('ru-RU', { month: 'short' });
  const monthNumber = d.getMonth() + 1;
  const monthIndex = d.getMonth();
  const timestamp = d.getTime();
  const week = getWeekNumber(d);

  return {
    date: d,
    dayNumber,
    day,
    dayNumberInWeek,
    dayShort,
    year,
    yearShort,
    month,
    monthShort,
    monthNumber,
    monthIndex,
    timestamp,
    week,
  };
};
