import { ReactNode, useRef } from 'react';
import { NavLink } from 'react-router-dom';

import { TITLE } from './config';
import { ReactComponent as Logo } from './assets/logo.svg';
import {
    ToggleDropDown,
    ToggleDropDownModule,
    IsOpenType,
    ToggleStatusType
} from '../../features/toggle-drop-down';
import { PersonInfo } from '../../entities/person-info';
import { DropDownMenu, DropDownMenuModel } from "../../entities/drop-down-menu";
import { USER_NAME } from '../../shared/lib';
import { BurgerMenu } from '../../shared/ui';

import styles from './header.module.css';

type HeaderProps = {
    isOpenDropDownMenu: IsOpenType;
    dropDownMenuToggle: ToggleStatusType;
    dropDownMenuChildren?: ReactNode;
};

export const Header = ({
    dropDownMenuChildren,
    isOpenDropDownMenu,
    dropDownMenuToggle
}: HeaderProps) => {
    const dropDownMenuRef = useRef<HTMLUListElement>(null);
    const onClickOutside = (e: MouseEvent) =>
        DropDownMenuModel.outsideDropDownHandler({
            e,
            isOpen: isOpenDropDownMenu,
            toggle: dropDownMenuToggle,
            dropDownMenuRef,
        });

    DropDownMenuModel.useClickOutside(isOpenDropDownMenu, onClickOutside);
    DropDownMenuModel.useScrollLock(isOpenDropDownMenu);

    return (
        <header className={styles.header}>
            <ToggleDropDown
                dataTestId='button-burger'
                handleClick={() =>
                    ToggleDropDownModule.toggleHandler(isOpenDropDownMenu, dropDownMenuToggle)}
                isMenuOpened={isOpenDropDownMenu}
                hiddenElementClass={styles.dropDownMenu}
                hiddenElement={(
                    <DropDownMenu dropDownMenuRef={dropDownMenuRef} logOutHandler={() => {
                    }}>
                        {dropDownMenuChildren}
                    </DropDownMenu>
                )}
            >
                <BurgerMenu isOpen={isOpenDropDownMenu}/>
            </ToggleDropDown>
            <NavLink to='/'><Logo/></NavLink>
            <h1>{TITLE}</h1>
            <PersonInfo name={USER_NAME}/>
        </header>
    );
};
