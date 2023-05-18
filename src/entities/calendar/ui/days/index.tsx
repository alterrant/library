import React, { Dispatch } from 'react';
import classNames from 'classnames';

import { UseCalendarTypes } from '../../lib/types';
import { checkAvailableDay, checkDateIsEqual, checkIsToday } from '../../lib/utils';

import styles from '../calendar.module.css';

type DaysProps = UseCalendarTypes & {
  selectDate: Dispatch<Date>;
  selectedDate: Date | null;
};

export const Days = ({ state, functions, selectDate, selectedDate }: DaysProps) => (
  <>
    <div className={styles.week__names}>
      {state.weekDaysNames.map((weekDaysName) => (
        <div key={weekDaysName.dayShort}>{weekDaysName.dayShort}</div>
      ))}
    </div>
    <div className={styles.days}>
      {state.calendarDays.map((day) => {
        const isToday = checkIsToday(day.date);
        const isSelectedDay = checkDateIsEqual(day.date, selectedDate);
        const isAdditionalDay = day.monthIndex !== state.selectedMonth.monthIndex;
        const isWeekend = day.dayNumberInWeek === 1 || day.dayNumberInWeek === 7;
        const isThisMonthWeekend = !isAdditionalDay && isWeekend;
        const isAvailableDay = checkAvailableDay(day);

        return (
          <div
            key={`${day.dayNumber}-${day.monthIndex}`}
            onClick={() => {
              if (isAvailableDay) {
                functions.setSelectedDay(day);
                selectDate(day.date);
              }
            }}
            className={classNames(
              styles.day,
              isToday && styles.today__item,
              isAvailableDay && styles.availableDay,
              isSelectedDay && styles.selected__item,
              isAdditionalDay && styles.additional__day,
              isThisMonthWeekend && styles.weekend
            )}
          >
            {day.dayNumber}
          </div>
        );
      })}
    </div>
  </>
);
