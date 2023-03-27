import { useEffect, useState } from 'react';

import { BookCardsModel } from 'widgets/books-content';
import { ToggleDropDownModule } from 'features/toggle-drop-down';
import { ProfileModel } from 'features/profile';
import { BookInteractionsModel } from 'features/book-interactions';
import { NavListModel } from 'entities/nav-lists';
import { WarningsModel } from 'entities/warnings';
import { UserModel } from 'entities/user';
import { BooksModel } from 'entities/books';
import { BookModel } from 'entities/book';
import { TOKEN, useAppDispatch, useAppSelector } from 'shared/lib';
import { useCheckErrors } from './use-check-errors';
import { useCheckSuccesses } from './use-check-success';

export const useLayout = () => {
  const { countedGenres } = useAppSelector(BookCardsModel.booksWithGenresSelector);
  const { genres } = useAppSelector(NavListModel.genresSelector);

  const ErrorsState = useCheckErrors();
  const SuccessesState = useCheckSuccesses();

  const isWarning = ErrorsState.isError || SuccessesState.isSuccess;

  const [toggleStatus, setToggleStatus, resetToggleStatus] = ToggleDropDownModule.useToggleState();
  const [warningsStatus, setWarningsStatus] = WarningsModel.useWarningState(isWarning);
  const [useEffectState, setUseEffectState] = useState({ isFirstEffect: false });

  const { isLoading: isUserLoading } = useAppSelector(UserModel.userSelector);
  const { isLoading: isBookLoading } = useAppSelector(BookModel.bookSelector);
  const { isLoading: isNavLoading } = useAppSelector(NavListModel.genresSelector);
  const { isLoading: isBookInteractiveLoading } = useAppSelector(BookInteractionsModel.bookInteractionsSelector);
  const { isLoading: isBooksLoading } = useAppSelector(BooksModel.booksSelector);
  const { isLoading: isProfileLoading } = useAppSelector(ProfileModel.profileSelector);

  const isLoading = isNavLoading || isBookInteractiveLoading || isBooksLoading || isProfileLoading || isUserLoading;

  const token = localStorage.getItem(TOKEN);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (token && !genres.length && useEffectState.isFirstEffect) dispatch(NavListModel.getGenres());
    if (token && useEffectState.isFirstEffect) dispatch(BooksModel.getBooks());

    return () => setUseEffectState({ isFirstEffect: true });
  }, [token, useEffectState.isFirstEffect]);

  return {
    ErrorsState,
    SuccessesState,
    warningsStatus,
    setWarningsStatus,
    countedGenres,
    toggleStatus,
    setToggleStatus,
    resetToggleStatus,
    isLoading,
  };
};
