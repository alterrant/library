import { Section } from './section';
import { CountedGenreType, sections } from '../../../entities/nav-lists';
import { DataTestIdNavigationTypes } from '../types';

import styles from './navigation.module.css';

type NavigationProps = {
  countedGenres: CountedGenreType[];
  toggleBurgerStatus?: () => void;
  closeErrorsHandler?: () => void;
} & DataTestIdNavigationTypes;

export const Navigation = ({
  countedGenres,
  toggleBurgerStatus,
  closeErrorsHandler,
  dataTestIdBurgerNavigation,
  dataTestIdFirstSection,
  dataTestIdAllBooks,
  dataTestIdSectionTerms,
  dataTestIdSectionContract,
}: NavigationProps) => {
  const navSections = sections.map((section) => (
    <Section
      key={section.id}
      section={section}
      countedGenres={countedGenres}
      toggleBurgerStatus={toggleBurgerStatus}
      closeErrorsHandler={closeErrorsHandler}
      dataTestIdFirstSection={dataTestIdFirstSection}
      dataTestIdAllBooks={dataTestIdAllBooks}
      dataTestIdSectionTerms={dataTestIdSectionTerms}
      dataTestIdSectionContract={dataTestIdSectionContract}
    />
  ));

  return (
    <nav>
      <ul data-test-id={dataTestIdBurgerNavigation} className={styles.navigation}>
        {navSections}
      </ul>
    </nav>
  );
};
