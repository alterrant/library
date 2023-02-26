import { combineReducers } from '@reduxjs/toolkit';

import { NavListModel } from '../../entities/nav-lists';
import { BooksModel } from "../../entities/books";
import { BookModel } from '../../entities/book';
import { BooksToolModel } from '../../entities/books-tool';

export const rootReducer = combineReducers({
    bookGenres: NavListModel.reducer,
    books: BooksModel.reducer,
    booksTool: BooksToolModel.reducer,
    book: BookModel.reducer,
});
