import { ReactNode } from 'react';

import { UseCalendarTypes } from '../../lib/types';
import { CalendarMode } from '../../lib/config';

import styles from '../calendar.module.css';

type HeaderDateProps = UseCalendarTypes & {
  children: ReactNode;
};

export const HeaderDate = ({ state, functions, children }: HeaderDateProps) => (
  <div data-test-id='month-select' className={styles.header__date}>
    {state.mode === CalendarMode.DAYS && (
      <div onClick={() => functions.setMode(CalendarMode.MONTHS)}>
        {state.monthsNames[state.selectedMonth.monthIndex]?.month} {state.selectedYear}
        {children}
      </div>
    )}
    {state.mode === CalendarMode.MONTHS && (
      <div onClick={() => functions.setMode(CalendarMode.YEARS)}>
        {state.selectedYear}
        {children}
      </div>
    )}
    {/* mode - years. После спринтов включить */}
    {/* {state.mode === CalendarMode.YEARS && (
      <div>
        {state.selectedYearsInterval[0]} -{' '}
        {state.selectedYearsInterval[state.selectedYearsInterval.length - 1]}
        {children}
      </div>
    )} */}
  </div>
);
