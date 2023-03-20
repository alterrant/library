import React, { useEffect, useState } from 'react';

import { BookReviews } from 'widgets/book-reviews';
import { BookCardsLib } from 'widgets/book-cards';
import { Modals } from 'widgets/modals';
import { RateBook } from 'features/rate-book';
import { AuthModel } from 'features/auth';
import {
  BookInteractionsLib,
  BookInteractionsModel,
  BookInteractions,
} from 'features/book-interactions';
import { AddToCart } from 'features/add-to-cart';
import { NavListModel } from 'entities/nav-lists';
import { Book, BookModel } from 'entities/book';
import { Preloader } from 'shared/ui';
import { ModalsStateType, useAppSelector } from 'shared/lib';

import styles from './book-page.module.css';

export const BookPage = () => {
  const {
    book,
    isLoading: isBookLoading,
    error: bookError,
  } = useAppSelector(BookModel.bookSelector);
  const { isLoading: isNavLoading, error: navError } = useAppSelector(NavListModel.genresSelector);
  const {
    isLoading: isBookInteractiveLoading,
    errorMessage: bookInteractiveError,
    successMessage,
  } = useAppSelector(BookInteractionsModel.bookInteractionsSelector);
  const { user: currentUser } = useAppSelector(AuthModel.authSelector);
  const { ModalNames } = BookInteractionsLib;

  const [modalStatus, setModalStatus] = useState<ModalsStateType>({ isOpen: true });
  const [bookState, setBookState] = useState<BookCardsLib.BookCardStateType>();
  const closeModal = () => setModalStatus({ isOpen: false });

  const isLoading = isNavLoading || isBookInteractiveLoading;
  const isError = bookError || navError || bookInteractiveError;

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <Book.BasicInfo
            imagesContainer={<Book.BookImagesContainer images={book.images} />}
            title={book.title}
            authors={book.authors}
            description={book.description}
            button={
              <AddToCart
                booking={book.booking}
                delivery={book.delivery}
                currentUserId={currentUser.id}
                bookId={book.id}
                setModalStatus={setModalStatus}
                setBookState={setBookState}
              />
            }
          />
          <section className={styles.bookAdditionalInfo}>
            <Book.Rating rating={book.rating} />
            <Book.DetailedInfo
              publish={book.publish}
              issueYear={book.issueYear}
              pages={book.pages}
              cover={book.cover}
              format={book.format}
              categories={book.categories}
              weight={book.weight}
              ISBN={book.ISBN}
              producer={book.producer}
            />
            <BookReviews
              comments={book.comments}
              rateBtn={
                <RateBook
                  setModalStatus={() => {
                    setModalStatus({
                      activeModal: ModalNames.RATE,
                      isOpen: true,
                    });
                  }}
                />
              }
            />
          </section>
        </>
      )}
      {modalStatus.activeModal === ModalNames.BOOKING && (
        <Modals modalStatus={modalStatus} closeModal={closeModal} dataTestId='booking-modal'>
          <BookInteractions.Booking
            bookId={bookState?.bookId}
            currentUserId={currentUser.id}
            closeModal={closeModal}
          />
        </Modals>
      )}
      {modalStatus.activeModal === ModalNames.CHANGE_BOOKING_DATE && (
        <Modals modalStatus={modalStatus} closeModal={closeModal} dataTestId='booking-modal'>
          <BookInteractions.ChangeBookingDate
            dateOrder={bookState?.dateOrder}
            bookId={bookState?.bookId}
            bookingId={bookState?.bookingId}
            currentUserId={currentUser.id}
            closeModal={closeModal}
          />
        </Modals>
      )}
      {modalStatus.activeModal === ModalNames.RATE && (
        <Modals dataTestId='modal-rate-book' modalStatus={modalStatus} closeModal={closeModal}>
          <BookInteractions.RateBook
            bookId={book.id}
            closeModal={closeModal}
            currentUserId={currentUser.id}
          />
        </Modals>
      )}
    </>
  );
};
