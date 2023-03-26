import { TOKEN, useAppDispatch, useAppSelector } from '../../../../../shared/lib';
import { BookCardsModel } from '../../../../books-content';
import { useCheckErrors } from './use-check-errors';
import { useCheckSuccesses } from './use-check-success';
import { useEffect, useState } from 'react';
import { NavListModel } from 'entities/nav-lists';
import { ToggleDropDownModule } from 'features/toggle-drop-down';
import { WarningsModel } from 'entities/warnings';
import { BooksModel } from 'entities/books';

export const useLayout = () => {
  const { countedGenres } = useAppSelector(BookCardsModel.booksWithGenresSelector);
  const { genres } = useAppSelector(NavListModel.genresSelector);

  const ErrorsState = useCheckErrors();
  const SuccessesState = useCheckSuccesses();

  const isWarning = ErrorsState.isError || SuccessesState.isSuccess;

  const [toggleStatus, setToggleStatus, resetToggleStatus] = ToggleDropDownModule.useToggleState();
  const [warningsStatus, setWarningsStatus] = WarningsModel.useWarningState(isWarning);
  const [useEffectState, setUseEffectState] = useState({ isFirstEffect: false });

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
  };
};
