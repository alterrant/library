import { useCallback } from 'react';

import { BookCardsWrapperProps } from '../../lib';
import { AddToCart, timeFormatOptions } from '../../../../features/add-to-cart';
import { BookCard, BooksTypes } from '../../../../entities/books';
import { getDate } from '../../../../shared/lib';
import { TextWithHighlights } from '../../../../shared/ui';

type BookCardsProps = {
    filterString: string;
    filteredBooks: BooksTypes;
    currentGenre: string;
} & BookCardsWrapperProps;

export const BookCards = ({
    cardsStyle,
    filterString,
    filteredBooks,
    currentGenre
}: BookCardsProps) => {

    const getHighlightTitle = useCallback((title: string, filterString: string) =>
        <TextWithHighlights
            title={title}
            filter={filterString}
        />, [filterString]
    );

    return (
        <>
            {filteredBooks?.map(bookCard => (
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
                    cardButton={(
                        <AddToCart
                            bookStatus={bookCard.booking?.order ? 'reserved' : 'available'}
                            buttonText={bookCard.booking?.order ?
                                `занята до ${getDate(bookCard.booking?.dateOrder, timeFormatOptions)}`
                                :
                                'забронировать'}
                        />
                    )}
                />
            ))}
        </>
    );
};
