import classNames from 'classnames';

import { Button, Templates } from '../../../../shared/ui';
import { Calendar } from '../../../../entities/calendar';
import {Nullable, toISOStringWithTimezone} from '../../../../shared/lib';
import { booking, useBooking } from '../../model';
import styles from '../../../../shared/lib/css/button-styles.module.css';
import { ModalButtonTexts, ModalTitles } from '../../lib';

type BookingProps = {
  bookId?: Nullable<number>;
  currentUserId: number;
  closeModal: () => void;
};

export const Booking = ({ bookId, currentUserId, closeModal }: BookingProps) => {
  const { selectedDate, setSelectedDay, dispatch } = useBooking();

  const bookingHandler = () => {
    if (bookId && currentUserId && selectedDate)
      dispatch(
        booking({
          data: {
            order: true,
            // selectedDate.toISOString(),
            dateOrder: toISOStringWithTimezone(selectedDate),
            book: bookId.toString(),
            customer: currentUserId.toString(),
          },
        })
      );

    closeModal();
  };

  return (
    <Templates.Booking
      title={ModalTitles.BOOKING}
      buttons={
        <Button
          isDisabled={!selectedDate}
          dataTestId='booking-button'
          classButton={classNames(styles.button, styles.available)}
          buttonText={ModalButtonTexts.BOOKING}
          classText={styles.buttonText}
          onClick={bookingHandler}
        />
      }
    >
      <Calendar selectedDate={selectedDate} selectDate={(date) => setSelectedDay(date)} />
    </Templates.Booking>
  );
};
