import { BookInfoTypes, BookStateTypes } from './types';

export const initialState: BookStateTypes = {
    isLoading: false,
    error: '',
    book: {} as BookInfoTypes,
};
