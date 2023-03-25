import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { RateBook } from 'features/book-interactions/ui/rate-book';
import { BookCard } from 'entities/books';
import { UserLib } from 'entities/user';
import { CARD_STYLES } from 'shared/lib';
import {
  initialBreakpoints,
  initialPagination,
  initialSlidesPerView,
  initialStaceBetween,
  LEAVE_FEEDBACK,
} from '../lib';

import styles from './profile-section-history.module.css';
import 'swiper/css';
import 'swiper/css/pagination';

type UserHistoryProps = {
  history: UserLib.HistoryType;
};

export const UserBooksHistory = ({ history }: UserHistoryProps) => {
  if (!(history && history.id)) return null;

  const { books } = history;

  return (
    <Swiper
      className={styles.swiper}
      spaceBetween={initialStaceBetween}
      slidesPerView={initialSlidesPerView}
      pagination={initialPagination}
      breakpoints={initialBreakpoints}
      modules={[Pagination]}
    >
      {books.map((book) => (
        <SwiperSlide data-test-id='history-slide'>
          <BookCard
            cardsStyle={CARD_STYLES.COLUMN}
            id={book.id}
            alt={book.title}
            imgURL={book.image}
            rating={book.rating}
            title={book.title}
            authors={book.authors}
            cardButton={
              <RateBook dataTestId='history-review-button' customButtonText={LEAVE_FEEDBACK} bookId={book.id} />
            }
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
