import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

import { useCurrentCategory } from '../../hooks';
import { DataTestIdNavigationTypes } from '../../types';
import { ToggleDropDown, ToggleDropDownModule } from '../../../../features/toggle-drop-down';
import { NavLists, NavListModel } from '../../../../entities/nav-lists';
import { ORIENTATION, useAppSelector } from '../../../../shared/lib';
import { PageNotFound, Arrow } from '../../../../shared/ui';
// TODO: изменить toggleStatus на setStatus { open: true\false }
type SectionProps = DataTestIdNavigationTypes & {
    section: { id: string, text: string, link: string };
    toggleBurgerStatus?: () => void;
    closeErrorsHandler?: () => void;
};

export const Section = ({
    section,
    toggleBurgerStatus,
    closeErrorsHandler,
    dataTestIdFirstSection,
    dataTestIdAllBooks,
    dataTestIdSectionTerms,
    dataTestIdSectionContract,
}: SectionProps) => {
    const navigate = useNavigate();
    const currentCategory = useCurrentCategory();
    const { genres } = useAppSelector(NavListModel.genresSelector);
    const [isOpen, toggleStatus] = ToggleDropDownModule.useToggleState(true);

    if (!currentCategory) return <PageNotFound />;
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
                    hiddenElement={!!genres.length && (
                        <NavLists.GenresList
                            genres={genres}
                            toggleStatus={toggleBurgerStatus}
                            dataTestId={dataTestIdAllBooks}
                        />
                    )}
                >
                    <NavLists.FirstSection
                        section={section}
                        categoryName={currentCategory}
                        closeErrorsHandler={closeErrorsHandler}
                        arrow={!!genres.length && (
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
