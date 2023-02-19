import { combineReducers } from '@reduxjs/toolkit';

import { NavListModel } from '../../entities/nav-lists';
import { BooksModel } from "../../entities/books";
import { BookModel } from '../../entities/book';

export const rootReducer = combineReducers({
    bookGenres: NavListModel.reducer,
    books: BooksModel.reducer,
    book: BookModel.reducer,
});
