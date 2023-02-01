import classNames from 'classnames';

import { Button } from '../../shared/ui';

import styles from './burger-menu.module.css';

type BurgerMenuProps = {
    handleClick: () => void;
    isMenuOpened: boolean;
};

export const BurgerMenu = ({
    handleClick,
    isMenuOpened,
}: BurgerMenuProps) => {
    // TODO: изменить classButton на buttonClass
    const buttonClass = classNames(styles.burgerMenu, isMenuOpened && styles.burgerMenuActive)
    return (
        <Button onClick={handleClick} classButton={buttonClass}>
            <span/>
        </Button>
    )
};
