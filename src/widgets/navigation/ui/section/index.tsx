import { Dispatch, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

import { ToggleDropDown } from 'features/toggle-drop-down';
import { NavLists, CountedGenreType } from 'entities/nav-lists';
import { ORIENTATION } from 'shared/lib';
import { Arrows } from 'shared/ui';
import { DataTestIdNavigationTypes } from '../../types';
import { useCurrentCategory } from '../../hooks';

type SectionProps = DataTestIdNavigationTypes & {
  section: { id: string; text: string; link: string };
  countedGenres: CountedGenreType[];
  toggleBurgerStatus?: () => void;
  closeErrorsHandler?: () => void;
  isOpen: boolean;
  toggleStatus: Dispatch<boolean>;
};

export const Section = ({
  section,
  countedGenres,
  toggleBurgerStatus,
  closeErrorsHandler,
  dataTestIdFirstSection,
  dataTestIdAllBooks,
  dataTestIdSectionTerms,
  dataTestIdSectionContract,
  isOpen,
  toggleStatus
}: SectionProps) => {
  const navigate = useNavigate();
  const currentCategory = useCurrentCategory();

  return (
    <Fragment key={section.id}>
      {section.link === 'books' ? (
        <ToggleDropDown
          dataTestId={dataTestIdFirstSection}
          handleClick={() => {
            navigate('/books/all');
            toggleStatus(!isOpen);
          }}
          isMenuOpened={isOpen}
          hiddenElement={
            !!countedGenres.length && (
              <NavLists.GenresList
                genres={countedGenres}
                toggleStatus={toggleBurgerStatus}
                dataTestId={dataTestIdAllBooks}
              />
            )
          }
        >
          <NavLists.FirstSection
            section={section}
            categoryName={currentCategory}
            closeErrorsHandler={closeErrorsHandler}
            arrow={
              !!countedGenres.length && (
                <Arrows.Arrow orientation={isOpen ? ORIENTATION.UP : ORIENTATION.DOWN} isColored />
              )
            }
          />
        </ToggleDropDown>
      ) : (
        <NavLists.SectionList
          dataTestId={section.id === '1' ? dataTestIdSectionTerms : dataTestIdSectionContract}
          section={section}
          closeErrorsHandler={() => {
            toggleStatus(false);
            if (closeErrorsHandler) closeErrorsHandler();
          }}
          categoryName={currentCategory}
        />
      )}
    </Fragment>
  );
};
