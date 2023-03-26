import { ToggleDropDownModule } from 'features/toggle-drop-down';
import { CountedGenreType, sections } from 'entities/nav-lists';
import { Section } from './section';
import { DataTestIdNavigationTypes, initialToggleStatus } from '../config';

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
  const [toggleStatus, setToggleStatus] = ToggleDropDownModule.useToggleState(initialToggleStatus);

  const navSections = sections.map((section) => (
    <Section
      key={section.id}
      section={section}
      countedGenres={countedGenres}
      linkClickHandler={toggleBurgerStatus}
      closeErrorsHandler={closeErrorsHandler}
      dataTestIdFirstSection={dataTestIdFirstSection}
      dataTestIdAllBooks={dataTestIdAllBooks}
      dataTestIdSectionTerms={dataTestIdSectionTerms}
      dataTestIdSectionContract={dataTestIdSectionContract}
      isOpen={toggleStatus.isOpen}
      setToggleStatus={setToggleStatus}
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
