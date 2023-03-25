import { Outlet } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import { NavListModel } from 'entities/nav-lists';
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
  const token = localStorage.getItem(TOKEN);

  const [isOpen, toggleStatus] = ToggleDropDownModule.useToggleState();
  const [warningsStatus, setWarningsStatus] = WarningsModel.useWarningState(isWarning);
  const [useEffectState, setUseEffectState] = useState({ isFirstEffect: false });

  const { countedGenres } = useAppSelector(BookCardsModel.booksWithGenresSelector);
  const { genres } = useAppSelector(NavListModel.genresSelector);
  /* const { resetState: resetBookInteractionsState } = BookInteractionsModel;
  const { resetState: resetUploadAvatarState } = ProfileModel; */
  // const [useEffectState, setUseEffectState] = useState({ isFirstEffect: false });
  useEffect(() => {
     if (token && !genres.length && useEffectState.isFirstEffect) dispatch(NavListModel.getGenres());
    console.log('')
    return () => setUseEffectState({ isFirstEffect: true });
  }, [useEffectState.isFirstEffect]);

  /* useEffect(() => {
    if (useEffectState.isFirstEffect) {
      (ErrorsState.errorSelector === ErrorSelectorNames.bookInteractionsError ||
        SuccessesState.successSelector === SuccessSelectorNames.bookInteractionsSuccess) &&
        setTimeout(() => dispatch(resetBookInteractionsState()), 5000);
    }

    return () => setUseEffectState({ isFirstEffect: true });
  }, [isWarning, useEffectState.isFirstEffect]); */

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
