import classNames from 'classnames';

import { Button, Templates } from '../../../../shared/ui';
import { Calendar } from '../../../../entities/calendar';
import {Nullable, toISOStringWithTimezone} from '../../../../shared/lib';
import { changeBookingDate, cancelBooking, useChangeBookingDate } from '../../model';
import { compareDates, ModalButtonTexts, ModalTitles } from '../../lib';

import styles from '../../../../shared/lib/css/button-styles.module.css';

type ChangeBookingDateProps = {
  dateOrder?: Nullable<string>;
  bookId?: Nullable<number>;
  currentUserId: number;
  bookingId?: Nullable<number>;
  closeModal: () => void;
};

export const ChangeBookingDate = ({
  dateOrder,
  bookId,
  currentUserId,
  bookingId,
  closeModal,
}: ChangeBookingDateProps) => {
  if (!dateOrder) return null;

  const { selectedDate, setSelectedDay, dispatch } = useChangeBookingDate(dateOrder);
  const isEqualDates = compareDates(dateOrder, (selectedDate as Date).toISOString());

  const changeBookingDateHandler = () => {
    if (bookId && bookingId && selectedDate)
      dispatch(
        changeBookingDate({
          bookingId,
          attemptPayload: {
            data: {
              order: true,
             /* dateOrder: selectedDate.toISOString(), */
              dateOrder: toISOStringWithTimezone(selectedDate),
              book: bookId.toString(),
              customer: currentUserId.toString(),
            },
          },
        })
      );

    closeModal();
  };

  const cancelBookingHandler = () => {
    if (bookId && bookingId && selectedDate) dispatch(cancelBooking({ bookingId, bookId }));

    closeModal();
  };

  return (
    <Templates.Booking
      title={ModalTitles.CHANGE_BOOKING_DATE}
      buttons={
        <div className={styles.buttonsWrapper}>
          <Button
            dataTestId='booking-button'
            isDisabled={isEqualDates}
            classButton={classNames(styles.button, styles.available)}
            buttonText={ModalButtonTexts.BOOKING}
            classText={styles.buttonText}
            onClick={changeBookingDateHandler}
          />
          <Button
            dataTestId='booking-cancel-button'
            classButton={classNames(styles.button, styles.changeable)}
            buttonText={ModalButtonTexts.CANCEL_BOOKING}
            classText={styles.buttonText}
            onClick={cancelBookingHandler}
          />
        </div>
      }
    >
      <Calendar selectedDate={selectedDate} selectDate={(date) => setSelectedDay(date)} />
    </Templates.Booking>
  );
};
