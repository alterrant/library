import { all } from 'redux-saga/effects';

import { AuthModel } from 'features/auth';
import { BookInteractionsModel } from 'features/book-interactions';
import { ProfileModel } from 'features/profile';
import { NavListModel } from 'entities/nav-lists';
import { BooksModel } from 'entities/books';
import { BookModel } from 'entities/book';
import { UserModel } from 'entities/user';

export function* rootWatcher(): Generator {
  yield all([
    NavListModel.genresWatcher(),
    BooksModel.booksWatcher(),
    BookModel.bookWatcher(),
    AuthModel.authWatcher(),
    BookInteractionsModel.modalsWatcher(),
    UserModel.userWatcher(),
    ProfileModel.userWatcher(),
  ]);
}
