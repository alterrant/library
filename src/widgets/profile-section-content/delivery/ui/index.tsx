import { Books } from 'entities/books';
import { UserLib } from 'entities/user';
import { CARD_STYLES, getDate } from 'shared/lib';
import { BookInteractionsLib } from 'features/book-interactions';

import styles from './profile-section-delivery.module.css';

type UserDeliveryProps = {
  delivery: UserLib.DeliveryType;
};

export const UserDelivery = ({ delivery }: UserDeliveryProps) => {
  if (!(delivery && delivery.id)) return null;

  const { book } = delivery;

  const deliveredDate = getDate(delivery.dateHandedTo, BookInteractionsLib.configs.timeFormatOptions);
  const handedToDate = `возврат ${deliveredDate}`;

  return (
    <Books.BookCard
      cardsStyle={CARD_STYLES.ROW}
      id={book.id}
      alt={book.title}
      imgURL={book.image}
      rating={book.rating}
      title={book.title}
      authors={book.authors}
      cardButton={<div className={styles.handedToDate}>{handedToDate}</div>}
    />
  );
};
