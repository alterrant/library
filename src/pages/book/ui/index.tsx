import React from 'react';

import { BookReviews } from 'widgets/book-reviews';
import { BookInteractions } from 'features/book-interactions';
import { Book } from 'entities/book';
import { Loader } from 'entities/loader';
import { useBookPage } from '../model';

import styles from './book-page.module.css';

export const BookPage = () => {
  const { currentBook, currentUser, isLoading, isError } = useBookPage();

  return (
    <Loader isLoading={isLoading} isError={isError}>
      <Book.BasicInfo
        imagesContainer={<Book.BookImagesContainer images={currentBook.images} />}
        title={currentBook.title}
        authors={currentBook.authors}
        description={currentBook.description}
        button={(
          <BookInteractions.Booking
            booking={currentBook.booking}
            delivery={currentBook.delivery}
            currentUserId={currentUser.id}
            bookId={currentBook.id}
          />
        )}
      />
      <section className={styles.bookAdditionalInfo}>
        <Book.Rating rating={currentBook.rating} />
        <Book.DetailedInfo
          publish={currentBook.publish}
          issueYear={currentBook.issueYear}
          pages={currentBook.pages}
          cover={currentBook.cover}
          format={currentBook.format}
          categories={currentBook.categories}
          weight={currentBook.weight}
          ISBN={currentBook.ISBN}
          producer={currentBook.producer}
        />
        <BookReviews comments={currentBook.comments} bookId={currentBook.id} />
      </section>
    </Loader>
  );
};
