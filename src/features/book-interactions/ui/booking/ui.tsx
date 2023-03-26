import classNames from 'classnames';
import { SyntheticEvent } from 'react';

import { Modals } from 'widgets/modals';
import { BooksConfig } from 'entities/books';
import { Button } from 'shared/ui';
import { Nullable } from 'shared/lib';
import { ModalContent } from '.';
import { hooks } from '../../model';
import { handlers, checkDisableStatus, getBookStatus, getButtonText } from '../../lib';
import { bookStyles, ModalNames } from '../../lib/configs';

import styles from './booking.module.css';

// TODO: рефактор импорта из widgets
type BookingProps = {
  booking: Nullable<BooksConfig.BookingType>;
  delivery: Nullable<BooksConfig.DeliveryType>;
  bookId: number;
  currentUserId?: number;
};

export const Booking = ({ booking, delivery, bookId, currentUserId }: BookingProps) => {
  const { modalStatus, setModalStatus, setBookState, bookState } = hooks.useBooking();

  const isBookingActiveModal = modalStatus.activeModal === ModalNames.BOOKING;
  const isChangeBookingDateActiveModal = modalStatus.activeModal === ModalNames.CHANGE_BOOKING_DATE;

  const bookStatus = getBookStatus(booking, delivery, currentUserId);
  const buttonText = getButtonText(bookStatus, booking ? booking.dateOrder : delivery?.dateHandedTo);

  const buttonCardStyle = classNames(styles.button, styles[bookStyles[bookStatus]]);

  const closeModal = () => setModalStatus({ isOpen: false });

  const handleClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    handlers.bookingHandler(bookStatus, setModalStatus, setBookState, booking, bookId);
  };

  return (
    <>
      <Button
        dataTestId='booking-button'
        classButton={buttonCardStyle}
        buttonText={buttonText}
        classText={styles.buttonText}
        onClick={handleClick}
        isDisabled={checkDisableStatus(bookStatus)}
      />
      {isBookingActiveModal && (
        <Modals dataTestId='booking-modal' modalStatus={modalStatus} closeModal={closeModal}>
          <ModalContent.Booking bookId={bookState?.bookId} currentUserId={currentUserId} closeModal={closeModal} />
        </Modals>
      )}
      {isChangeBookingDateActiveModal && (
        <Modals dataTestId='booking-modal' modalStatus={modalStatus} closeModal={closeModal}>
          <ModalContent.ChangeBookingDate
            dateOrder={bookState?.dateOrder}
            bookId={bookState?.bookId}
            bookingId={bookState?.bookingId}
            currentUserId={currentUserId}
            closeModal={closeModal}
          />
        </Modals>
      )}
    </>
  );
};
