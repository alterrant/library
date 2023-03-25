import { useState } from 'react';

import { BookCardsLib } from 'widgets/book-cards';
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
