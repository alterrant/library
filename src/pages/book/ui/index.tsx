import React from 'react';
import { useParams } from 'react-router-dom';

import { BookReviews } from 'widgets/book-reviews';
import { Booking } from 'features/book-interactions/ui/booking';
import { Book } from 'entities/book';
import { Preloader } from 'shared/ui';
import { useBookPage } from '../model';

import styles from './book-page.module.css';


export const BookPage = () => {
  const { currentBook, currentUser, isLoading } = useBookPage();

  // кусок ненужного кода: начало
  // Тесты получают response массив всех книг по запросу за конкретной книгой (/books/127). В апи получают объект книги
  const bookId = useParams().id;
  const bookFromTestResponse = Array.isArray(currentBook) && bookId && currentBook.find((item) => item.id === +bookId);

  const book = bookFromTestResponse ? bookFromTestResponse : currentBook;
  // кусок ненужного кода: конец

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
              <Booking
                booking={book.booking}
                delivery={book.delivery}
                currentUserId={currentUser.id}
                bookId={book.id}
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
            <BookReviews comments={book.comments} bookId={book.id} />
          </section>
        </>
      )}
    </>
  );
};
