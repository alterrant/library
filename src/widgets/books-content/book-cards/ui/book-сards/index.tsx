import { Booking } from 'features/book-interactions/ui/booking';
import { Books, BooksConfig } from 'entities/books';
import { UserModel } from 'entities/user';
import { useAppSelector } from 'shared/lib';
import { BookCardsWrapperProps } from '../../lib';

type BookCardsProps = {
  filterString: string;
  filteredBooks: BooksConfig.BooksTypes;
  currentGenre: string;
} & BookCardsWrapperProps;

export const BookCards = ({ cardsStyle, filterString, filteredBooks, currentGenre }: BookCardsProps) => {
  const { user: currentUser } = useAppSelector(UserModel.userSelector);

  return (
    <>
      {filteredBooks?.map((bookCard) => (
        <Books.BookCard
          key={bookCard.id}
          cardsStyle={cardsStyle}
          id={bookCard.id}
          imgURL={bookCard.image?.url}
          alt={bookCard.title}
          rating={bookCard.rating}
          filterString={filterString}
          title={bookCard.title}
          authors={bookCard.authors}
          genres={currentGenre}
          cardButton={
            <Booking
              booking={bookCard.booking}
              delivery={bookCard.delivery}
              currentUserId={currentUser?.id}
              bookId={bookCard.id}
            />
          }
        />
      ))}
    </>
  );
};
