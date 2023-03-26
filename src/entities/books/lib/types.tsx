import { PayloadAction } from '@reduxjs/toolkit';

import { Nullable } from 'shared/lib';

export type BooksTypes = {
  issueYear: string;
  rating: number;
  title: string;
  authors: string[];
  image: { url: string } | null;
  categories: string[];
  id: number;
  booking: Nullable<BookingType>;
  delivery: Nullable<DeliveryType>;
  histories: {
    id: number;
    userId: number;
  }[];
}[];

export type BookingType = {
  id: Nullable<number>;
  order: Nullable<boolean>;
  dateOrder: Nullable<string>;
  customerId: Nullable<number>;
  customerFirstName: Nullable<string>;
  customerLastName: Nullable<string>;
};

export type DeliveryType = {
  id: Nullable<number>;
  handed: Nullable<boolean>;
  dateHandedFrom: Nullable<string>;
  dateHandedTo: Nullable<string>;
  recipientId: Nullable<number>;
  recipientFirstName: Nullable<string>;
  recipientLastName: Nullable<string>;
};

export type BooksByGenresTypes = {
  genre: string;
  genreFilteredBooks: BooksTypes;
}[];

export type BooksStateTypes = {
  isLoading: boolean;
  error: string;
  books: BooksTypes;
};

export type SetBooksActionType = PayloadAction<BooksTypes>;
export type SetBooksErrorActionType = PayloadAction<string>;
