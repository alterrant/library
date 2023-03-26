import { BookInteractionsModel } from 'features/book-interactions';
import { ProfileModel } from "features/profile";
import { NavListModel } from 'entities/nav-lists';
import { BooksModel } from 'entities/books';
import { BookModel } from 'entities/book';
import { useAppSelector } from 'shared/lib';
import { ErrorSelectorNames, CheckErrorsType, SuccessSelectorNames, CheckSuccessesType } from '../lib';

// TODO: привести к единообразию
export const useCheckErrors = (): CheckErrorsType => {
  const { error: navError } = useAppSelector(NavListModel.genresSelector);
  const { error: booksError } = useAppSelector(BooksModel.booksSelector);
  const { error: bookError } = useAppSelector(BookModel.bookSelector);
  const { errorMessage: bookInteractionsError } = useAppSelector(BookInteractionsModel.bookInteractionsSelector);
  const { error: profileError } = useAppSelector(ProfileModel.profileSelector);

  return {
    isError: !!(navError || booksError || bookError || bookInteractionsError || profileError),
    errorSelector:
      (navError && ErrorSelectorNames.navError) ||
      (booksError && ErrorSelectorNames.booksError) ||
      (bookError && ErrorSelectorNames.bookError) ||
      (bookInteractionsError && ErrorSelectorNames.bookInteractionsError) ||
      (bookInteractionsError && ErrorSelectorNames.bookInteractionsError) ||
      (profileError && ErrorSelectorNames.profileError) ||
      '',
    errorMessage: navError || booksError || bookError || bookInteractionsError || profileError || '',
  };
};

export const useCheckSuccesses = (): CheckSuccessesType => {
  const { successMessage: bookInteractionsSuccess } = useAppSelector(BookInteractionsModel.bookInteractionsSelector);
  const { success: profileSuccess } = useAppSelector(ProfileModel.profileSelector);

  return {
    isSuccess: !!(bookInteractionsSuccess || profileSuccess),
    successSelector:
      (bookInteractionsSuccess && SuccessSelectorNames.bookInteractionsSuccess) ||
      (profileSuccess && SuccessSelectorNames.profileSuccess) ||
      '',
    successMessage: bookInteractionsSuccess || profileSuccess || '',
  };
};
