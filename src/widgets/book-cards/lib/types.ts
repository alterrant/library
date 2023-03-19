import { CardStylesTypes, Nullable } from '../../../shared/lib';

export type BookCardsWrapperProps = {
  cardsStyle: CardStylesTypes;
};

export type BookCardStateType = {
  bookId: number;
  bookingId?: Nullable<number>;
  dateOrder?: Nullable<string>;
};
