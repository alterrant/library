import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

import { useCurrentCategory } from '../../hooks';
import { DataTestIdNavigationTypes } from '../../types';
import { ToggleDropDown, ToggleDropDownModule } from '../../../../features/toggle-drop-down';
import { NavLists, CountedGenreType } from '../../../../entities/nav-lists';
import { ORIENTATION } from '../../../../shared/lib';
import { Arrow } from '../../../../shared/ui';
// TODO: изменить toggleStatus на setStatus { open: true\false }
type SectionProps = DataTestIdNavigationTypes & {
    section: { id: string, text: string, link: string };
    countedGenres: CountedGenreType[];
    toggleBurgerStatus?: () => void;
    closeErrorsHandler?: () => void;
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
}: SectionProps) => {
    const navigate = useNavigate();
    const currentCategory = useCurrentCategory();
    const [isOpen, toggleStatus] = ToggleDropDownModule.useToggleState(true);

    return (
        <Fragment key={section.id}>
            {section.link === 'books' ? (
                <ToggleDropDown
                    dataTestId={dataTestIdFirstSection}
                    handleClick={() => {
                        navigate('/books/all');
                        ToggleDropDownModule.toggleHandler(isOpen, toggleStatus);
                    }}
                    isMenuOpened={isOpen}
                    hiddenElement={!!countedGenres.length && (
                        <NavLists.GenresList
                            genres={countedGenres}
                            toggleStatus={toggleBurgerStatus}
                            dataTestId={dataTestIdAllBooks}
                        />
                    )}
                >
                    <NavLists.FirstSection
                        section={section}
                        categoryName={currentCategory}
                        closeErrorsHandler={closeErrorsHandler}
                        arrow={!!countedGenres.length && (
                            <Arrow
                                orientation={isOpen ? ORIENTATION.UP : ORIENTATION.DOWN}
                                isColored
                            />
                        )}
                    />
                </ToggleDropDown>
            ) : (
                <NavLists.SectionList
                    dataTestId={
                        (section.id === '1') ?
                            dataTestIdSectionTerms
                            :
                            dataTestIdSectionContract
                    }
                    section={section}
                    closeErrorsHandler={closeErrorsHandler}
                    categoryName={currentCategory}
                />
            )}
        </Fragment>
    );
};
