import { Outlet } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import { Navigation } from 'widgets/navigation';
import { Footer } from 'widgets/footer';
import { Header } from 'widgets/header';
import { ToggleDropDownModule } from 'features/toggle-drop-down';
import { Warnings, WarningsModel } from 'entities/warnings';
import { NavListModel } from 'entities/nav-lists';
import { BooksModel } from 'entities/books';
import {ModalsStateType, TOKEN, useAppDispatch, useAppSelector} from 'shared/lib';
import { useCheckErrors, useCheckSuccesses } from '../model';
import { getWarningText } from '../lib';
import { BookCardsModel } from '../../../books-content/book-cards';

import styles from './layout.module.css';
// TODO: вынести BLL в модел
// TODO: объединить логику закрытия менюшек
export const Layout = () => {
  const ErrorsState = useCheckErrors();
  const SuccessesState = useCheckSuccesses();
  const isWarning = ErrorsState.isError || SuccessesState.isSuccess;

  const dispatch = useAppDispatch();

  const [toggleStatus, setToggleStatus, resetToggleStatus] = ToggleDropDownModule.useToggleState();
  const [warningsStatus, setWarningsStatus] = WarningsModel.useWarningState(isWarning);
  const [useEffectState, setUseEffectState] = useState({ isFirstEffect: false });

  const { countedGenres } = useAppSelector(BookCardsModel.booksWithGenresSelector);
  const { genres } = useAppSelector(NavListModel.genresSelector);
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
          toggleStatusDropDownMenu={toggleStatus}
          setToggleStatusDropDownMenu={setToggleStatus}
          resetToggleStatusDropDownMenu={resetToggleStatus}
          dropDownMenuChildren={
            toggleStatus.isOpen && (
              <Navigation
                countedGenres={countedGenres}
                toggleBurgerStatus={resetToggleStatus}
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
