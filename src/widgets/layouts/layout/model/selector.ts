import { createSelector } from '@reduxjs/toolkit';

import { BookInteractionsModel } from 'features/book-interactions';
import { ProfileModel } from 'features/profile';
import { NavListModel } from 'entities/nav-lists';
import { BooksModel } from 'entities/books';
import { UserModel } from 'entities/user';
import { BookModel } from 'entities/book';

export const loadingsSelector = createSelector(
  [
    UserModel.userSelector,
    BookModel.bookSelector,
    NavListModel.genresSelector,
    BookInteractionsModel.bookInteractionsSelector,
    BooksModel.booksSelector,
    ProfileModel.profileSelector,
  ],
  (
    { isLoading: isLoadingUser },
    { isLoading: isLoadingBook },
    { isLoading: isLoadingNavList },
    { isLoading: isLoadingBookInteractions },
    { isLoading: isLoadingBooks },
    { isLoading: isLoadingProfile }
  ) =>
    isLoadingUser ||
    isLoadingBook ||
    isLoadingNavList ||
    isLoadingBookInteractions ||
    isLoadingBooks ||
    isLoadingProfile
);
