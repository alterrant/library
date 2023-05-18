import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

import { ToggleDropDown } from 'features/toggle-drop-down';
import { NavLists, CountedGenreType } from 'entities/nav-lists';
import {ORIENTATION, SetToggleStatusType} from 'shared/lib';
import { Arrows } from 'shared/ui';
import { useCurrentCategory } from '../../hooks';

type SectionProps = {
  section: { id: string; text: string; link: string };
  countedGenres: CountedGenreType[];
  linkClickHandler?: () => void;
  closeErrorsHandler?: () => void;
  isOpen: boolean;
  setToggleStatus: SetToggleStatusType;
};

export const Section = ({
  section,
  countedGenres,
  linkClickHandler,
  closeErrorsHandler,
  isOpen,
  setToggleStatus
}: SectionProps) => {
  const navigate = useNavigate();
  const currentCategory = useCurrentCategory();

  return (
    <Fragment key={section.id}>
      {section.link === 'books' ? (
        <ToggleDropDown
          handleClick={() => {
            navigate('/books/all');
            setToggleStatus({ isOpen: !isOpen });
          }}
          isMenuOpened={isOpen}
          hiddenElement={
            !!countedGenres.length && (
              <NavLists.GenresList
                genres={countedGenres}
                linkClickHandler={linkClickHandler}
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
          section={section}
          closeErrorsHandler={() => {
            setToggleStatus({ isOpen: false });
            if (closeErrorsHandler) closeErrorsHandler();
          }}
          categoryName={currentCategory}
        />
      )}
    </Fragment>
  );
};
