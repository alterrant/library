import { Dispatch } from 'react';

import { BookCardsLib } from 'widgets/book-cards';
import { BooksLib } from 'entities/books';
import { ModalsStateType, Nullable } from 'shared/lib';
import { checkBookedByCurrentUser } from '..';
import { BookStatus, ModalNames } from '../configs';

type HandleClickType = (
  bookStatus: BookStatus,
  setModalStatus: Dispatch<ModalsStateType>,
  setBookState: Dispatch<BookCardsLib.BookCardStateType>,
  booking: Nullable<BooksLib.BookingType>,
  bookId: number
) => void;

export const bookingHandler: HandleClickType = (bookStatus, setModalStatus, setBookState, booking, bookId) => {
  const isBookedByCurrentUser = checkBookedByCurrentUser(bookStatus);
  const activeModal = isBookedByCurrentUser ? ModalNames.CHANGE_BOOKING_DATE : ModalNames.BOOKING;

  setModalStatus({ activeModal, isOpen: true });

  setBookState({ bookId, bookingId: booking?.id, dateOrder: booking?.dateOrder });
};
