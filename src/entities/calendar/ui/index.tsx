import React from 'react';

import { HeaderDate } from './header-date';
import { Days } from './days';
import { Month } from './month';
import { Year } from './year';
import { ReactComponent as DropDownArrow } from './assets/arrow-drop-down.svg';
import { useCalendar } from '../model';
import { CalendarMode } from '../lib/config';
import { Arrow } from '../../../shared/ui/arrows';
import { ORIENTATION } from '../../../shared/lib';

import styles from './calendar.module.css';

type CalendarProps = {
  selectedDate: Date | null;
  selectDate: (date: Date) => void;
  firstWeekDayNumber?: number;
};

export const Calendar = ({
  selectedDate: date,
  selectDate,
  firstWeekDayNumber = 2,
}: CalendarProps) => {
  const { functions, state } = useCalendar({
    selectedDate: date,
    firstWeekDayNumber,
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <HeaderDate state={state} functions={functions}>
          <DropDownArrow />
        </HeaderDate>

        <div className={styles.arrows}>
          <Arrow
            orientation={ORIENTATION.UP}
            onClick={() => functions.onClickArrow(ORIENTATION.LEFT)}
          />
          <Arrow
            orientation={ORIENTATION.DOWN}
            onClick={() => functions.onClickArrow(ORIENTATION.RIGHT)}
          />
        </div>
      </div>

      <div className={styles.body}>
        {state.mode === CalendarMode.DAYS && (
          <Days functions={functions} state={state} selectDate={selectDate} selectedDate={date} />
        )}
        {state.mode === CalendarMode.MONTHS && <Month functions={functions} state={state} />}
        {state.mode === CalendarMode.YEARS && <Year functions={functions} state={state} />}
      </div>
    </div>
  );
};
