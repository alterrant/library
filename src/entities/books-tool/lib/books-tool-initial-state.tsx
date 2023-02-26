// TODO: вынести типы из books и books-tools в shared
import { BooksToolInitialStateType } from './types';

export const initialState:  BooksToolInitialStateType = {
    isDescendingRating: false,
    filterString: '',
};
