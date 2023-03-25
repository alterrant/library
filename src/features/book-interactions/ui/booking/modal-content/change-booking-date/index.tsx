import classNames from 'classnames';

import { Calendar } from 'entities/calendar';
import { Button, Templates } from 'shared/ui';
import { Nullable } from 'shared/lib';
import { hooks } from '../../../../model';
import { handlers, compareDates } from '../../../../lib';
import { ModalButtonTexts, ModalTitles } from '../../../../lib/configs';

import styles from '../../../../../../shared/lib/css/button-styles.module.css';

type ChangeBookingDateProps = {
  dateOrder?: Nullable<string>;
  bookId?: Nullable<number>;
  currentUserId?: number;
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

  const { selectedDate, setSelectedDay, dispatch } = hooks.useChangeBookingDateModalContent(dateOrder);
  const isEqualDates = compareDates(dateOrder, (selectedDate as Date).toISOString());

  const changeBookingDataHandlerProps = { closeModal, bookingId, bookId, currentUserId, selectedDate, dispatch };
  const changeBookingData = () => handlers.changeBookingDateHandler(changeBookingDataHandlerProps);

  const cancelBookingHandlerProps = { bookingId, bookId, dispatch, closeModal };
  const cancelBooking = () => handlers.cancelBookingHandler(cancelBookingHandlerProps);

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
            onClick={changeBookingData}
          />
          <Button
            dataTestId='booking-cancel-button'
            classButton={classNames(styles.button, styles.changeable)}
            buttonText={ModalButtonTexts.CANCEL_BOOKING}
            classText={styles.buttonText}
            onClick={cancelBooking}
          />
        </div>
      }
    >
      <Calendar selectedDate={selectedDate} selectDate={(date) => setSelectedDay(date)} />
    </Templates.Booking>
  );
};
