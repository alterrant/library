import {ReactNode, useRef, useState} from 'react';
import {NavLink, useNavigate} from 'react-router-dom';

import { TITLE } from '../config';
import { ReactComponent as Logo } from './assets/logo.svg';
import {
    ToggleDropDown,
    ToggleDropDownModule,
    IsOpenType,
    ToggleStatusType
} from '../../../features/toggle-drop-down';
import {signOut} from "../../../features/auth/model/handlers";
import { PersonInfo } from '../../../entities/person-info';
import { DropDownMenu, DropDownMenuModel } from "../../../entities/drop-down-menu";
import { USER_NAME} from '../../../shared/lib';
import { BurgerMenu } from '../../../shared/ui';

import styles from './header.module.css';

type HeaderProps = {
    isOpenDropDownMenu: IsOpenType;
    dropDownMenuToggle: ToggleStatusType;
    dropDownMenuChildren?: ReactNode;
};
// TODO: Отрефакторить!
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

    const [ value, setValue ] = useState(false);
    const navigate = useNavigate();

    return (
        <header className={styles.header}>
            <ToggleDropDown
                dataTestId='button-burger'
                handleClick={() =>
                    ToggleDropDownModule.toggleHandler(isOpenDropDownMenu, dropDownMenuToggle)}
                isMenuOpened={isOpenDropDownMenu}
                hiddenElementClass={styles.dropDownMenu}
                hiddenElement={(
                    <DropDownMenu forTest dropDownMenuRef={dropDownMenuRef} logOutHandler={() =>
                        signOut(navigate)}
                    >
                        {dropDownMenuChildren}
                    </DropDownMenu>
                )}
            >
                <BurgerMenu isOpen={isOpenDropDownMenu} />
            </ToggleDropDown>
            <NavLink to='/'><Logo /></NavLink>
            <h1>{TITLE}</h1>

            <div className={styles.profileWrapper}>
                <ToggleDropDown
                    handleClick={() => setValue(!value)}
                    isMenuOpened={value}
                    hiddenElementClass={styles.dropDownProfile}
                    hiddenElement={(
                        <DropDownMenu dropDownMenuRef={dropDownMenuRef} logOutHandler={() =>
                            signOut(navigate)} />
                    )}
                >
                    <PersonInfo name={USER_NAME}/>
                </ToggleDropDown>
            </div>
        </header>
    );
};
