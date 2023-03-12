import { Outlet } from 'react-router-dom';
import {useEffect, useState} from "react";

import { NavListModel } from 'entities/nav-lists';
import { useCheckErrors } from '../model';
import { BookCardsModel } from '../../../book-cards';
import { Header } from '../../../header';
import { Footer } from '../../../footer';
import { Navigation } from '../../../navigation';
import { ToggleDropDownModule } from '../../../../features/toggle-drop-down';
import { Errors, ErrorsModel } from '../../../../entities/errors';
import { TOKEN, useAppDispatch, useAppSelector } from '../../../../shared/lib';

import styles from './layout.module.css';
// TODO: вынести BLL в модел
// TODO: объединить логику закрытия менюшек
export const Layout = () => {
    const isErrors = useCheckErrors();

    const [isOpen, toggleStatus] = ToggleDropDownModule.useToggleState();
    const [errorsStatus, setErrorsStatus] = ErrorsModel.useErrorState(isErrors);
    const { countedGenres } = useAppSelector(BookCardsModel.booksWithGenresSelector);

    const dispatch = useAppDispatch();
    const [test, setTest] = useState(false);
    const token = localStorage.getItem(TOKEN);

    useEffect(() => {
        if (token && test) dispatch(NavListModel.getGenres());

        return  () => setTest(true);
    },[test])

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
