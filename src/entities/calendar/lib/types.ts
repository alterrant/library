import { CalendarMode } from './config';
import { ORIENTATION } from '../../../shared/lib';
import { Dispatch } from 'react';

export type DateType = {
  date: Date;
  dayNumber: number;
  day: string;
  dayNumberInWeek: number;
  dayShort: string;
  year: number;
  yearShort: string;
  month: string;
  monthShort: string;
  monthNumber: number;
  monthIndex: number;
  timestamp: number;
  week: number;
};

export type UseCalendarTypes = {
  state: {
    mode: CalendarMode;
    calendarDays: DateType[];
    weekDaysNames: Record<string, string>[];
    monthsNames: { month: string; monthShort: string; monthIndex: number; date: Date }[];
    selectedDay: DateType;
    selectedMonth: any;
    selectedYear: number;
    selectedYearsInterval: number[];
  };
  functions: {
    onClickArrow: (direction: ORIENTATION.RIGHT | ORIENTATION.LEFT) => void;
    setMode: Dispatch<CalendarMode>;
    setSelectedDay: Dispatch<DateType>;
    setSelectedMonthByIndex: any;
    setSelectedYear: Dispatch<number>;
    setSelectedYearsInterval: Dispatch<number[]>;
  };
};
