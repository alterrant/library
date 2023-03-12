import classNames from 'classnames';
import { SyntheticEvent } from 'react';

import { BOOK_STATUS } from '../../entities/books/lib';
import { Button } from '../../shared/ui';

import stylesColumnCard from '../../entities/books/ui/book-card-column.module.css';

type AddToCartProps = {
    bookStatus: typeof BOOK_STATUS[keyof typeof BOOK_STATUS];
    buttonText: string;
};

export const AddToCart = ({
   bookStatus,
   buttonText,
}: AddToCartProps) => {
    const handleClick = (e: SyntheticEvent<HTMLButtonElement>) => {
        e.preventDefault();
    }
    const getButtonStatus = () => bookStatus === BOOK_STATUS.RESERVED;

    const buttonCardStyle = classNames(stylesColumnCard.cardButton, stylesColumnCard[bookStatus]);
// TODO: проверить cardButtonText, не слетело ли чего, когда удалял cardButtonText из Button.module.css
    return (
        <Button
            classButton={buttonCardStyle}
            buttonText={buttonText}
            classText={stylesColumnCard.cardButtonText}
            onClick={handleClick}
            isDisabled={getButtonStatus()}/>
)};
