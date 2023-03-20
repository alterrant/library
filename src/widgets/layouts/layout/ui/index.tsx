import { Outlet } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import { NavListModel } from 'entities/nav-lists';
import { resetState } from 'features/book-interactions/model/slice';
import { useCheckErrors, useCheckSuccesses } from '../model';
import { getWarningText } from '../lib';
import { BookCardsModel } from '../../../book-cards';
import { Header } from '../../../header';
import { Footer } from '../../../footer';
import { Navigation } from '../../../navigation';
import { ToggleDropDownModule } from '../../../../features/toggle-drop-down';
import { Warnings, WarningsModel } from '../../../../entities/warnings';
import { TOKEN, useAppDispatch, useAppSelector } from '../../../../shared/lib';

import styles from './layout.module.css';

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

  useEffect(() => {
    if (token && useEffectState.isFirstEffect) dispatch(NavListModel.getGenres());

    return () => setUseEffectState({ isFirstEffect: true });
  }, [useEffectState.isFirstEffect]);

  useEffect(() => {
    setTimeout(() => dispatch(resetState()), 5000);
  }, [isWarning]);

  return (
    <>
      <section className={styles.layoutContainer}>
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
