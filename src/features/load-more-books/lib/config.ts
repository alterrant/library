import { BookCounterStateType } from './types';

export const LOAD_MORE_BOOKS = 'показать ещё'

export const initialNumberOfVisibleBooks = 8;
export const booksStep = 8;

export const initialBooksCounterState: BookCounterStateType = {
  numberOfVisibleBooks: initialNumberOfVisibleBooks,
}
