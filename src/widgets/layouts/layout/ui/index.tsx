import { Outlet } from 'react-router-dom';

import { Navigation } from 'widgets/navigation';
import { Footer } from 'widgets/footer';
import { Header } from 'widgets/header';
import { Warnings, WarningsModel } from 'entities/warnings';
import { useLayout } from '../model';
import { getWarningText } from '../lib';

import styles from './layout.module.css';

export const Layout = () => {
  const {
    warningsStatus,
    setWarningsStatus,
    toggleStatus,
    setToggleStatus,
    resetToggleStatus,
    SuccessesState,
    ErrorsState,
    countedGenres,
  } = useLayout();

  return (
    <section className={styles.layoutContainer}>
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
  );
};
