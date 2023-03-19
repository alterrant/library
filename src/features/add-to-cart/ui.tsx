import classNames from 'classnames';
import { Dispatch, SyntheticEvent } from 'react';

// TODO: рефактор импорта widgets
import { BookCardStateType } from '../../widgets/book-cards/lib';
import { ModalNames } from '../book-interactions/lib';
import { BookingType, DeliveryType } from '../../entities/books/lib';
import { Button } from '../../shared/ui';

import { ModalsStateType, Nullable } from '../../shared/lib';
import {
  bookStyles,
  checkBookedByCurrentUser,
  checkDisableStatus,
  getBookStatus,
  getButtonText,
} from './lib';

import styles from './add-to-cart.module.css';
// TODO: изменить название AddToCart на Booking
type AddToCartProps = {
  booking: Nullable<BookingType>;
  delivery: Nullable<DeliveryType>;
  bookId: number;
  setModalStatus: Dispatch<ModalsStateType>;
  setBookState: Dispatch<BookCardStateType>;
  currentUserId: number;
};

export const AddToCart = ({
  booking,
  delivery,
  bookId,
  currentUserId,
  setModalStatus,
  setBookState,
}: AddToCartProps) => {
  const bookStatus = getBookStatus(booking, delivery, currentUserId);

  const handleClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    setModalStatus({
      activeModal: checkBookedByCurrentUser(bookStatus)
        ? ModalNames.CHANGE_BOOKING_DATE
        : ModalNames.BOOKING,
      isOpen: true,
    });

    setBookState({
      bookId,
      bookingId: booking?.id,
      dateOrder: booking?.dateOrder,
    });
  };

  const buttonCardStyle = classNames(styles.button, styles[bookStyles[bookStatus]]);

  return (
    <Button
      dataTestId='booking-button'
      classButton={buttonCardStyle}
      buttonText={getButtonText(bookStatus, booking ? booking.dateOrder : delivery?.dateHandedTo)}
      classText={styles.buttonText}
      onClick={handleClick}
      isDisabled={checkDisableStatus(bookStatus)}
    />
  );
};
