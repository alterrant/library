import { ToggleDropDownModule } from 'features/toggle-drop-down';
import { CountedGenreType, sections } from 'entities/nav-lists';
import { Section } from './section';
import { initialToggleStatus } from '../config';

import styles from './navigation.module.css';

type NavigationProps = {
  countedGenres: CountedGenreType[];
  toggleBurgerStatus?: () => void;
  closeErrorsHandler?: () => void;
};

export const Navigation = ({
  countedGenres,
  toggleBurgerStatus,
  closeErrorsHandler,
}: NavigationProps) => {
  const [toggleStatus, setToggleStatus] = ToggleDropDownModule.useToggleState(initialToggleStatus);

  const navSections = sections.map((section) => (
    <Section
      key={section.id}
      section={section}
      countedGenres={countedGenres}
      linkClickHandler={toggleBurgerStatus}
      closeErrorsHandler={closeErrorsHandler}
      isOpen={toggleStatus.isOpen}
      setToggleStatus={setToggleStatus}
    />
  ));

  return (
    <nav>
      <ul className={styles.navigation}>
        {navSections}
      </ul>
    </nav>
  );
};
