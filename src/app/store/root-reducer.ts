import { combineReducers } from '@reduxjs/toolkit';

import { AuthModel } from 'features/auth';
import { BookInteractionsModel } from 'features/book-interactions';
import { ProfileModel } from 'features/profile';
import { NavListModel } from 'entities/nav-lists';
import { BooksModel } from 'entities/books';
import { BookModel } from 'entities/book';
import { BooksToolModel } from 'entities/books-tool';
import { UserModel } from 'entities/user';

export const rootReducer = combineReducers({
  bookGenres: NavListModel.reducer,
  books: BooksModel.reducer,
  booksTool: BooksToolModel.reducer,
  book: BookModel.reducer,
  auth: AuthModel.reducer,
  bookInteractions: BookInteractionsModel.reducer,
  user: UserModel.reducer,
  profile: ProfileModel.reducer,
});
