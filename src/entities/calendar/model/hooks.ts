import { Dispatch, useMemo, useState } from 'react';
import { CalendarMode } from '../lib/config';
import { DateType } from '../lib/types';

import {
  createDate,
  createMonth,
  getMonthNumberOfDays,
  getMonthsNames,
  getWeekDaysNames,
} from '../lib/utils';
import { ORIENTATION } from '../../../shared/lib';

interface UseCalendarParams {
  selectedDate: Date | null;
  firstWeekDayNumber?: number;
}

const DAYS_IN_WEEK = 7;

const getYearsInterval = (year: number) => {
  const startYear = Math.floor(year / 10) * 10;
  return [...Array(10)].map((_, index) => startYear + index);
};

type UseCalendarStateType = (
  date?: Date
) => [selectedDate: Date | null, setSelectedDay: Dispatch<Date>];

export const useCalendarState: UseCalendarStateType = (date?) => {
  const initialState = date ? new Date(date) : null;
  const [selectedDate, setSelectedDay] = useState<Date | null>(initialState);

  return [selectedDate, setSelectedDay];
};

export const useCalendar = ({ selectedDate: date, firstWeekDayNumber = 2 }: UseCalendarParams) => {
  const [mode, setMode] = useState<CalendarMode>(CalendarMode.DAYS);
  const [selectedDay, setSelectedDay] = useState(createDate({ date }));

  const [selectedMonth, setSelectedMonth] = useState(
    createMonth({ date: new Date(selectedDay.year, selectedDay.monthIndex) })
  );
  const [selectedYear, setSelectedYear] = useState(selectedDay.year);
  const [selectedYearsInterval, setSelectedYearsInterval] = useState(
    getYearsInterval(selectedDay.year)
  );

  const monthsNames = useMemo(() => getMonthsNames(), []);
  const weekDaysNames = useMemo(() => getWeekDaysNames(firstWeekDayNumber), []);

  const days = useMemo(() => selectedMonth.createMonthDays(), [selectedMonth, selectedYear]);

  const calendarDays = useMemo(() => {
    const monthNumberOfDays = getMonthNumberOfDays(selectedMonth.monthIndex, selectedYear);

    const prevMonthDays = createMonth({
      date: new Date(selectedYear, selectedMonth.monthIndex - 1),
    }).createMonthDays();

    const nextMonthDays = createMonth({
      date: new Date(selectedYear, selectedMonth.monthIndex + 1),
    }).createMonthDays();

    const firstDay = days[0] as DateType;
    const lastDay = days[monthNumberOfDays - 1] as DateType;

    const shiftIndex = firstWeekDayNumber - 1;
    const numberOfPrevDays =
      firstDay.dayNumberInWeek - 1 - shiftIndex < 0
        ? DAYS_IN_WEEK - (firstWeekDayNumber - firstDay.dayNumberInWeek)
        : firstDay.dayNumberInWeek - 1 - shiftIndex;

    const numberOfNextDays =
      DAYS_IN_WEEK - lastDay.dayNumberInWeek + shiftIndex > 6
        ? DAYS_IN_WEEK - lastDay.dayNumberInWeek - (DAYS_IN_WEEK - shiftIndex)
        : DAYS_IN_WEEK - lastDay.dayNumberInWeek + shiftIndex;

    const totalCalendarDays = days.length + numberOfPrevDays + numberOfNextDays;

    const result: DateType[] = [];

    for (let i = 0; i < numberOfPrevDays; i++) {
      const inverted = numberOfPrevDays - i;
      const daysOfPrevMonth = prevMonthDays[prevMonthDays.length - inverted];

      if (daysOfPrevMonth) result.push(daysOfPrevMonth);
    }

    for (let i = numberOfPrevDays; i < totalCalendarDays - numberOfNextDays; i++) {
      const daysOfThisMonth = days[i - numberOfPrevDays];

      if (daysOfThisMonth) result.push(daysOfThisMonth);
    }

    for (let i = totalCalendarDays - numberOfNextDays; i < totalCalendarDays; i++) {
      const daysOfNextMonth = nextMonthDays[i - totalCalendarDays + numberOfNextDays];

      if (daysOfNextMonth) result.push(daysOfNextMonth);
    }

    return result;
  }, [selectedMonth.year, selectedMonth.monthIndex, selectedYear]);

  const onClickArrow = (direction: ORIENTATION.RIGHT | ORIENTATION.LEFT) => {
    if (mode === CalendarMode.YEARS && direction === ORIENTATION.LEFT) {
      return setSelectedYearsInterval(getYearsInterval(selectedYearsInterval[0]! - 10));
    }

    if (mode === CalendarMode.YEARS && direction === ORIENTATION.RIGHT) {
      return setSelectedYearsInterval(getYearsInterval(selectedYearsInterval[0]! + 10));
    }

    if (mode === CalendarMode.MONTHS && direction === ORIENTATION.LEFT) {
      const year = selectedYear - 1;
      if (!selectedYearsInterval.includes(year)) setSelectedYearsInterval(getYearsInterval(year));
      return setSelectedYear(selectedYear - 1);
    }

    if (mode === CalendarMode.MONTHS && direction === ORIENTATION.RIGHT) {
      const year = selectedYear + 1;
      if (!selectedYearsInterval.includes(year)) setSelectedYearsInterval(getYearsInterval(year));
      return setSelectedYear(selectedYear + 1);
    }

    if (mode === CalendarMode.DAYS) {
      const monthIndex =
        direction === ORIENTATION.LEFT
          ? selectedMonth.monthIndex - 1
          : selectedMonth.monthIndex + 1;

      if (monthIndex === -1) {
        const year = selectedYear - 1;
        setSelectedYear(year);
        if (!selectedYearsInterval.includes(year)) setSelectedYearsInterval(getYearsInterval(year));
        return setSelectedMonth(
          createMonth({
            date: new Date(selectedYear - 1, 11),
          })
        );
      }

      if (monthIndex === 12) {
        const year = selectedYear + 1;
        setSelectedYear(year);
        if (!selectedYearsInterval.includes(year)) setSelectedYearsInterval(getYearsInterval(year));
        return setSelectedMonth(createMonth({ date: new Date(year, 0) }));
      }

      setSelectedMonth(createMonth({ date: new Date(selectedYear, monthIndex) }));
    }
  };

  const setSelectedMonthByIndex = (monthIndex: number) => {
    setSelectedMonth(createMonth({ date: new Date(selectedYear, monthIndex) }));
  };

  return {
    state: {
      mode,
      calendarDays,
      weekDaysNames,
      monthsNames,
      selectedDay,
      selectedMonth,
      selectedYear,
      selectedYearsInterval,
    },
    functions: {
      onClickArrow,
      setMode,
      setSelectedDay,
      setSelectedMonthByIndex,
      setSelectedYear,
      setSelectedYearsInterval,
    },
  };
};
