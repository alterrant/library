import { Section } from './section';
import { sections } from '../../../entities/nav-lists';
import { DataTestIdNavigationTypes } from '../types';

import styles from '../navigation.module.css';

type NavigationProps = {
    toggleBurgerStatus?: () => void;
    closeErrorsHandler?: () => void;
} & DataTestIdNavigationTypes;

export const Navigation = ({
    toggleBurgerStatus,
    closeErrorsHandler,
    dataTestIdBurgerNavigation,
    dataTestIdFirstSection,
    dataTestIdAllBooks,
    dataTestIdSectionTerms,
    dataTestIdSectionContract,
}: NavigationProps) => {
    const navSections = sections.map(section => (
        <Section
            key={section.id}
            section={section}
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
