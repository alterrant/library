import { BookModel } from 'entities/book';
import { BooksModel } from 'entities/books';
import { BooksToolModel } from 'entities/books-tool';
import { UserModel } from 'entities/user';
import { AuthModel } from 'features/auth';
import { BookInteractionsModel } from 'features/book-interactions';
import { ProfileModel } from 'features/profile';
import { NavigateFunction } from 'react-router-dom';

import { DispatchAnyType, TOKEN } from '../../../../shared/lib';

export const signOut = (navigate: NavigateFunction, dispatch: DispatchAnyType) => {
  localStorage.removeItem(TOKEN);
  dispatch(BooksModel.resetBooks());
  dispatch(BooksToolModel.resetFilters());
  dispatch(BookModel.resetState());
  dispatch(AuthModel.resetState());
  dispatch(BookInteractionsModel.resetState());
  dispatch(UserModel.resetState());
  dispatch(ProfileModel.resetState());
  navigate('../auth');
};
