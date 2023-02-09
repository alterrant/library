import { Fragment, Dispatch } from 'react';
import { useNavigate } from 'react-router-dom';

import { PageNotFound } from '../../../../shared/ui/page-not-found';
import { getCategoryName } from '../../../../entities/nav-lists/lib';
import { ToggleDropDown, ToggleDropDownModule } from '../../../../features/toggle-drop-down';
import { NavLists, NavListModule } from '../../../../entities/nav-lists';
import { Arrow } from '../../../../shared/ui/arrow';
import { ORIENTATION } from '../../../../shared/lib';
import { DataTestIdNavigationTypes } from '../../types';

type SectionProps = DataTestIdNavigationTypes & {
    section: { id: string, text: string, link: string },
    toggleBurgerStatus?: Dispatch<boolean>;
};
// архитектурно Section должен лежать между widgets и pages
export const Section = ({
    section,
    toggleBurgerStatus,
    dataTestIdFirstSection,
    dataTestIdAllBooks,
    dataTestIdSectionTerms,
    dataTestIdSectionContract,
}: SectionProps) => {
    const pathname = NavListModule.usePathname();
    const categoryName = getCategoryName(pathname);

    const navigate = useNavigate();
    const [isOpen, toggleStatus] = ToggleDropDownModule.useToggleState(true);
    // TODO: изменить toggleStatus на setStatus { open: true\false }
    if (!categoryName) return <PageNotFound />;

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
                    hiddenElement={<NavLists.GenresList toggleStatus={toggleBurgerStatus} dataTestId={dataTestIdAllBooks} />}
                >
                    <NavLists.FirstSection
                        section={section}
                        categoryName={categoryName}
                        arrow={<Arrow
                            orientation={isOpen ? ORIENTATION.UP : ORIENTATION.DOWN}
                            isColored
                        />}
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
                    categoryName={categoryName}
                />
            )}
        </Fragment>
    );
};
