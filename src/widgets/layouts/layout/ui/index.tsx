import { Outlet } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import { AuthModel } from 'features/auth';
import { NavListModel } from 'entities/nav-lists';
import { BooksModel } from 'entities/books';
import { BookInteractionsModel } from 'features/book-interactions';
import { useCheckErrors, useCheckSuccesses } from '../model';
import { ErrorSelectorNames, getWarningText, SuccessSelectorNames } from '../lib';
import { BookCardsModel } from '../../../book-cards';
import { Header } from '../../../header';
import { Footer } from '../../../footer';
import { Navigation } from '../../../navigation';
import { ToggleDropDownModule } from '../../../../features/toggle-drop-down';
import { ProfileModel } from '../../../../features/profile';
import { Warnings, WarningsModel } from '../../../../entities/warnings';
import { TOKEN, useAppDispatch, useAppSelector } from '../../../../shared/lib';

import styles from './layout.module.css';
// import { BooksModel } from 'entities/books';
// TODO: вынести BLL в модел
// TODO: объединить логику закрытия менюшек
export const Layout = () => {
  const ErrorsState = useCheckErrors();
  const SuccessesState = useCheckSuccesses();
  const isWarning = ErrorsState.isError || SuccessesState.isSuccess;

  const dispatch = useAppDispatch();

  const [isOpen, toggleStatus] = ToggleDropDownModule.useToggleState();
  const [warningsStatus, setWarningsStatus] = WarningsModel.useWarningState(isWarning);
  const [useEffectState, setUseEffectState] = useState({ isFirstEffect: false });

  const { countedGenres } = useAppSelector(BookCardsModel.booksWithGenresSelector);
  const { genres } = useAppSelector(NavListModel.genresSelector);
  const { isSuccess } = useAppSelector(AuthModel.authSelector);
  const token = localStorage.getItem(TOKEN);
  // ниже почти рабочие 39-43

  useEffect(() => {
    if (token && !genres.length && useEffectState.isFirstEffect) dispatch(NavListModel.getGenres());
    if (token && useEffectState.isFirstEffect) dispatch(BooksModel.getBooks());

    return () => setUseEffectState({ isFirstEffect: true });
  }, [token, useEffectState.isFirstEffect]);

  return (
    <>
      <section data-test-id='main-page' className={styles.layoutContainer}>
        {warningsStatus.isOpen && (
          <Warnings
            isNegative={ErrorsState.isError}
            warningText={getWarningText(ErrorsState, SuccessesState) as string}
            handleClose={() => WarningsModel.closeHandler(setWarningsStatus)}
          />
        )}
        <Header
          isOpenDropDownMenu={isOpen}
          dropDownMenuToggle={toggleStatus}
          dropDownMenuChildren={
            isOpen && (
              <Navigation
                countedGenres={countedGenres}
                toggleBurgerStatus={() => ToggleDropDownModule.closeHandler(toggleStatus)}
                dataTestIdBurgerNavigation='burger-navigation'
                dataTestIdFirstSection='burger-showcase'
                dataTestIdAllBooks='burger-'
                dataTestIdSectionContract='burger-contract'
                dataTestIdSectionTerms='burger-terms'
              />
            )
          }
        />
        <Outlet
          context={{
            closeErrorsHandler: () => WarningsModel.closeHandler(setWarningsStatus),
          }}
        />
        <Footer />
      </section>
    </>
  );
};
