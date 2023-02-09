import { Outlet } from 'react-router-dom';

import { ToggleDropDownModule } from 'features/toggle-drop-down';
import { Header } from '../../header';
import { Footer } from '../../footer';
import { Navigation } from "../../navigation";

import styles from './layout.module.css';

export const Layout = () => {
    const [isOpen, toggleStatus] = ToggleDropDownModule.useToggleState();

    return (
        <section className={styles.layoutContainer}>
            <Header
                isOpenDropDownMenu={isOpen}
                dropDownMenuToggle={toggleStatus}
                dropDownMenuChildren={isOpen && <Navigation
                    toggleBurgerStatus={toggleStatus}
                    dataTestIdBurgerNavigation='burger-navigation'
                    dataTestIdFirstSection='burger-showcase'
                    dataTestIdAllBooks='burger-books'
                    dataTestIdSectionContract='burger-contract'
                    dataTestIdSectionTerms='burger-terms'
                />}
            />
            <Outlet/>
            <Footer/>
        </section>
    );
};
