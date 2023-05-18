import { NavListModel } from 'entities/nav-lists';
import { BooksModel } from 'entities/books';
import { ProfileModel } from 'features/profile';
import { BookModel } from 'entities/book';
import { BookInteractionsModel } from 'features/book-interactions';
import { useAppSelector } from 'shared/lib';
import { CheckErrorsType, ErrorSelectorNames } from '../../lib';
import { LayoutModel } from '../..';

export const useCheckErrors = (): CheckErrorsType => {
  const { error: navError } = useAppSelector(NavListModel.genresSelector);
  const { error: booksError } = useAppSelector(BooksModel.booksSelector);
  const { error: bookError } = useAppSelector(BookModel.bookSelector);
  const { errorMessage: bookInteractionsError } = useAppSelector(BookInteractionsModel.bookInteractionsSelector);
  const { error: profileError } = useAppSelector(ProfileModel.profileSelector);

  const isError  = useAppSelector(LayoutModel.errorsSelector);

  return {
    isError,
    errorSelector:
      (navError && ErrorSelectorNames.navError) ||
      (booksError && ErrorSelectorNames.booksError) ||
      (bookError && ErrorSelectorNames.bookError) ||
      (bookInteractionsError && ErrorSelectorNames.bookInteractionsError) ||
      (profileError && ErrorSelectorNames.profileError) ||
      '',
    errorMessage: navError || booksError || bookError || bookInteractionsError || profileError || '',
  };
};
