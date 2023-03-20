import { useCallback, useState } from 'react';

import { AddToCart } from 'features/add-to-cart';
import { BookInteractions } from 'features/book-interactions';
import { BookCard, BooksTypes } from 'entities/books';
import { TextWithHighlights } from 'shared/ui';
import { AuthModel } from 'features/auth';
import { ModalNames } from 'features/book-interactions/lib/config';
import { Modals } from 'widgets/modals';
import { ModalsStateType, useAppSelector } from 'shared/lib';
import { BookCardStateType, BookCardsWrapperProps } from '../../lib';

type BookCardsProps = {
  filterString: string;
  filteredBooks: BooksTypes;
  currentGenre: string;
} & BookCardsWrapperProps;

export const BookCards = ({
  cardsStyle,
  filterString,
  filteredBooks,
  currentGenre,
}: BookCardsProps) => {
  const getHighlightTitle = useCallback(
    (title: string, filterString: string) => (
      <TextWithHighlights title={title} filter={filterString} />
    ),
    [filterString]
  );

  const { user: currentUser } = useAppSelector(AuthModel.authSelector);
  const [modalStatus, setModalStatus] = useState<ModalsStateType>({ isOpen: true });
  const [bookState, setBookState] = useState<BookCardStateType>();

  const closeModal = () => setModalStatus({ isOpen: false });

  return (
    <>
      {filteredBooks?.map((bookCard) => (
        <BookCard
          key={bookCard.id}
          cardsStyle={cardsStyle}
          id={bookCard.id}
          img={bookCard.image}
          alt={bookCard.title}
          rating={bookCard.rating}
          title={getHighlightTitle(bookCard.title, filterString)}
          authors={bookCard.authors}
          genres={currentGenre}
          cardButton={
            <AddToCart
              booking={bookCard.booking}
              delivery={bookCard.delivery}
              currentUserId={currentUser.id}
              bookId={bookCard.id}
              setModalStatus={setModalStatus}
              setBookState={setBookState}
            />
          }
        />
      ))}
      {modalStatus.activeModal === ModalNames.BOOKING && (
        <Modals dataTestId='booking-modal' modalStatus={modalStatus} closeModal={closeModal}>
          <BookInteractions.Booking
            bookId={bookState?.bookId}
            currentUserId={currentUser.id}
            closeModal={closeModal}
          />
        </Modals>
      )}
      {modalStatus.activeModal === ModalNames.CHANGE_BOOKING_DATE && (
        <Modals dataTestId='booking-modal' modalStatus={modalStatus} closeModal={closeModal}>
          <BookInteractions.ChangeBookingDate
            dateOrder={bookState?.dateOrder}
            bookId={bookState?.bookId}
            bookingId={bookState?.bookingId}
            currentUserId={currentUser.id}
            closeModal={closeModal}
          />
        </Modals>
      )}
    </>
  );
};
