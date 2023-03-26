import classNames from 'classnames';

import { BookInteractionsLib } from 'features/book-interactions';
import { Books } from 'entities/books';
import { UserLib } from 'entities/user';
import { CARD_STYLES, useAppDispatch } from 'shared/lib';
import { Button } from 'shared/ui';
import { CANSEL_BOOKING_TEXT } from '../lib';

import buttonStyles from '../../../../shared/lib/css/button-styles.module.css';

type UserBookingProps = {
  booking: UserLib.BookingType;
};

export const UserBooking = ({ booking }: UserBookingProps) => {
  if (!(booking && booking.book)) return null;

  const { book } = booking;
  const dispatch = useAppDispatch();
  const cancelBookingProps = { bookId: book.id, bookingId: booking.id, dispatch };

  const cancelBooking = () => BookInteractionsLib.handlers.cancelBookingHandler(cancelBookingProps);

  return (
    <Books.BookCard
      cardsStyle={CARD_STYLES.ROW}
      id={book.id}
      alt={book.title}
      imgURL={book.image}
      rating={book.rating}
      title={book.title}
      authors={book.authors}
      cardButton={
        <Button
          dataTestId='cancel-booking-button'
          classButton={classNames(buttonStyles.button, buttonStyles.available)}
          buttonText={CANSEL_BOOKING_TEXT}
          classText={buttonStyles.buttonText}
          onClick={cancelBooking}
        />
      }
    />
  );
};
