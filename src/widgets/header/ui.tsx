import { NavLink } from 'react-router-dom';
import { PersonInfo } from '../../entities/person-info';
import { ReactComponent as Logo } from './assets/logo.svg';
import { TITLE, USER_NAME } from './config';
import { BurgerMenu } from '../../features/toggle-burger-menu';
import { BurgerMenuModule } from '../../features/toggle-burger-menu/module';

import styles from './header.module.css';

export const Header = () => {
    const [isOpen, toggleStatus] = BurgerMenuModule.useBurgerState();
// TODO: БИБЛИОТЕКА должна быть на 120px и на одном уровне с остальным контентом
    return (
        <header className={styles.header}>
            <BurgerMenu
                handleClick={() => BurgerMenuModule.toggleHandler(isOpen, toggleStatus)}
                isMenuOpened={isOpen}/>
            <NavLink to='/'><Logo /></NavLink>
            <h1>{TITLE}</h1>
            <PersonInfo name={USER_NAME}/>
        </header>
    )
};
