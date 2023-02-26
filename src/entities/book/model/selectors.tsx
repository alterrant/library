import { BookStateTypes } from '../lib';

export const bookSelector = (state: RootState): BookStateTypes => state.book;
