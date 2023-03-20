import classNames from 'classnames';

import { UseCalendarTypes } from '../../lib/types';
import { CalendarMode } from '../../lib/config';

import styles from '../calendar.module.css';

type MonthProps = UseCalendarTypes;

export const Month = ({ state, functions }: MonthProps) => (
  <>
    <div className={styles.pick__items__container}>
      {state.monthsNames.map((monthsName) => {
        const isCurrentMonth =
          new Date().getMonth() === monthsName.monthIndex &&
          state.selectedYear === new Date().getFullYear();
        const isSelectedMonth = monthsName.monthIndex === state.selectedMonth.monthIndex;

        return (
          <div
            key={monthsName.month}
            onClick={() => {
              functions.setSelectedMonthByIndex(monthsName.monthIndex);
              functions.setMode(CalendarMode.DAYS);
            }}
            className={classNames(
              styles.pick__item,
              isSelectedMonth && styles.selected__item,
              isCurrentMonth && styles.today__item
            )}
          >
            {monthsName.monthShort}
          </div>
        );
      })}
    </div>
  </>
);
