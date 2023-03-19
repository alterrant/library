import {
  ErrorSelectorNames,
  CheckErrorsType,
  SuccessSelectorNames,
  CheckSuccessesType,
} from '../lib';
import { BookInteractionsModel } from '../../../../features/book-interactions';
import { NavListModel } from '../../../../entities/nav-lists';
import { BooksModel } from '../../../../entities/books';
import { BookModel } from '../../../../entities/book';
import { useAppSelector } from '../../../../shared/lib';
// TODO: привести к единообразию
export const useCheckErrors = (): CheckErrorsType => {
  const { error: navError } = useAppSelector(NavListModel.genresSelector);
  const { error: booksError } = useAppSelector(BooksModel.booksSelector);
  const { error: bookError } = useAppSelector(BookModel.bookSelector);
  const { errorMessage: bookInteractionsError } = useAppSelector(
    BookInteractionsModel.bookInteractionsSelector
  );

  return {
    isError: !!(navError || booksError || bookError || bookInteractionsError),
    errorSelector:
      (navError && ErrorSelectorNames.navError) ||
      (booksError && ErrorSelectorNames.booksError) ||
      (bookError && ErrorSelectorNames.bookError) ||
      (bookInteractionsError && ErrorSelectorNames.bookInteractionsError) ||
      '',
    errorMessage: navError || booksError || bookError || bookInteractionsError || '',
  };
};

export const useCheckSuccesses = (): CheckSuccessesType => {
  const { successMessage: bookInteractionsSuccess } = useAppSelector(
    BookInteractionsModel.bookInteractionsSelector
  );

  return {
    isSuccess: !!bookInteractionsSuccess,
    successSelector:
      (bookInteractionsSuccess && SuccessSelectorNames.bookInteractionsSuccess) || '',
    successMessage: bookInteractionsSuccess || '',
  };
};
