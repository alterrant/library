import { Outlet } from 'react-router-dom';

import { useCheckErrors } from './model';
import { BookCardsModel } from '../../book-cards';
import { Header } from '../../header';
import { Footer } from '../../footer';
import { Navigation } from '../../navigation';
import { ToggleDropDownModule } from '../../../features/toggle-drop-down';
import { NavListModel } from '../../../entities/nav-lists';
import { Errors, ErrorsModel } from '../../../entities/errors';
import { useAppSelector, useFetch } from '../../../shared/lib';

import styles from './layout.module.css';


// TODO: объединить логику закрытия менюшек
export const Layout = () => {
    const isErrors = useCheckErrors();

    const [isOpen, toggleStatus] = ToggleDropDownModule.useToggleState();
    const [errorsStatus, setErrorsStatus] = ErrorsModel.useErrorState(isErrors);
    const { countedGenres } = useAppSelector(BookCardsModel.booksWithGenresSelector);

    useFetch(NavListModel.getGenres(), false);

    return (
        <section className={styles.layoutContainer}>
            {errorsStatus.isOpen && (
                <Errors handleClose={() => ErrorsModel.closeHandler(setErrorsStatus)} />
            )}
            <Header
                isOpenDropDownMenu={isOpen}
                dropDownMenuToggle={toggleStatus}
                dropDownMenuChildren={isOpen && (
                    <Navigation
                        countedGenres={countedGenres}
                        toggleBurgerStatus={() =>
                            ToggleDropDownModule.closeHandler(toggleStatus)}
                        dataTestIdBurgerNavigation='burger-navigation'
                        dataTestIdFirstSection='burger-showcase'
                        dataTestIdAllBooks='burger-'
                        dataTestIdSectionContract='burger-contract'
                        dataTestIdSectionTerms='burger-terms'
                    />
                )}
            />
            <Outlet
                context={{
                    closeErrorsHandler: () => ErrorsModel.closeHandler(setErrorsStatus)
                }}
            />
            <Footer />
        </section>
    );
};
