import classNames from 'classnames';

import { Calendar } from 'entities/calendar';
import { Button, Templates } from 'shared/ui';
import { Nullable, toISOStringWithTimezone } from 'shared/lib';
import { booking, hooks } from '../../../../model';
import { ModalButtonTexts, ModalTitles } from '../../../../lib/configs';

import styles from '../../../../../../shared/lib/css/button-styles.module.css';

type BookingProps = {
  bookId?: Nullable<number>;
  currentUserId?: number;
  closeModal: () => void;
};

export const Booking = ({ bookId, currentUserId, closeModal }: BookingProps) => {
  const { selectedDate, setSelectedDay, dispatch } = hooks.useBookingModalContent();

  const bookingHandler = () => {
    if (bookId && currentUserId && selectedDate) {
      const bookingData = {
        order: true,
        dateOrder: toISOStringWithTimezone(selectedDate),
        book: bookId.toString(),
        customer: currentUserId.toString(),
      };

      const bookingPayload = { data: bookingData };

      dispatch(booking(bookingPayload));
    }

    closeModal();
  };

  return (
    <Templates.Booking
      title={ModalTitles.BOOKING}
      buttons={
        <Button
          isDisabled={!selectedDate}
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
