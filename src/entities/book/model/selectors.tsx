import { BookStateTypes } from '../config';

export const bookSelector = (state: RootState): BookStateTypes => state.book;
