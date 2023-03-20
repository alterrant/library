import classNames from 'classnames';

import { UseCalendarTypes } from '../../lib/types';
import { CalendarMode } from '../../lib/config';

import styles from '../calendar.module.css';

type YearProps = UseCalendarTypes;

export const Year = ({ state, functions }: YearProps) => (
  <>
    <div className={styles.pick__items__container}>
      <div className={styles.unchoosable__year}>{state.selectedYearsInterval[0]! - 1}</div>
      {state.selectedYearsInterval.map((year) => {
        const isCurrentYear = new Date().getFullYear() === year;
        const isSelectedYear = year === state.selectedYear;

        return (
          <div
            key={year}
            onClick={() => {
              functions.setSelectedYear(year);
              functions.setMode(CalendarMode.MONTHS);
            }}
            className={classNames(
              styles.pick__item,
              isCurrentYear && styles.today__item,
              isSelectedYear && styles.selected__item
            )}
          >
            {year}
          </div>
        );
      })}
      <div className={styles.unchoosable__year}>
        {state.selectedYearsInterval[state.selectedYearsInterval.length - 1]! + 1}
      </div>
    </div>
  </>
);
