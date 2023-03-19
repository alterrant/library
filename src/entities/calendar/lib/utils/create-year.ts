import { createDate } from './create-date';
import { createMonth } from './create-month';

interface CreateYearParams {
  year?: number;
  monthNumber?: number;
}

export const createYear = (params?: CreateYearParams) => {
  const monthCount = 12;
  const today = createDate();

  const year = params?.year ?? today.year;
  const monthNumber = params?.monthNumber ?? today.monthNumber;

  const month = createMonth({ date: new Date(year, monthNumber - 1) });

  const getMonthDays = (monthIndex: number) =>
    createMonth({ date: new Date(year, monthIndex) }).createMonthDays();

  const createYearMonths = () => {
    const months = [];

    for (let i = 0; i <= monthCount - 1; i += 1) {
      months[i] = getMonthDays(i);
    }

    return months;
  };

  return {
    createYearMonths,
    month,
    year,
  };
};
