import { useState } from 'react';

import { BookCardsLib } from 'widgets/books-content/book-cards';
import { ModalsStateType } from 'shared/lib';

export const useBooking = () => {
  const [modalStatus, setModalStatus] = useState<ModalsStateType>({ isOpen: true });
  const [bookState, setBookState] = useState<BookCardsLib.BookCardStateType>();

  return {
    modalStatus,
    setModalStatus,
    bookState,
    setBookState,
  };
};
