import { ReactNode } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { ToggleClickOutside } from 'features/toggle-with-click-outside';
import { signOut } from 'features/auth/model/handlers';
import { ToggleDropDown } from 'features/toggle-drop-down';
import { User } from 'entities/user';
import { DropDownMenu } from 'entities/drop-down-menu';
import { BurgerMenu } from 'shared/ui';
import { SetToggleStatusType, ToggleStatusType, useAppDispatch } from 'shared/lib';
import { ReactComponent as Logo } from './assets/logo.svg';
import { TITLE } from '../config';

import styles from './header.module.css';

type HeaderProps = {
  toggleStatusDropDownMenu: ToggleStatusType;
  setToggleStatusDropDownMenu: SetToggleStatusType;
  resetToggleStatusDropDownMenu: () => void;
  dropDownMenuChildren?: ReactNode;
};

export const Header = ({
  dropDownMenuChildren,
  toggleStatusDropDownMenu,
  setToggleStatusDropDownMenu,
  resetToggleStatusDropDownMenu,
}: HeaderProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const toggleDropDownHandler = () => setToggleStatusDropDownMenu({ isOpen: !toggleStatusDropDownMenu.isOpen });

  const signOutHandler = () => signOut(navigate, dispatch);

  return (
    <header className={styles.header}>
      <ToggleDropDown
        handleClick={toggleDropDownHandler}
        isMenuOpened={toggleStatusDropDownMenu.isOpen}
        hiddenElementClass={styles.dropDownMenu}
        hiddenElement={
          <ToggleClickOutside closeModal={resetToggleStatusDropDownMenu} modalStatus={toggleStatusDropDownMenu}>
            <DropDownMenu isBurgerDropDown isUnderline logOutHandler={signOutHandler}>
              {dropDownMenuChildren}
            </DropDownMenu>
          </ToggleClickOutside>
        }
      >
        <BurgerMenu isOpen={toggleStatusDropDownMenu.isOpen} />
      </ToggleDropDown>
      <NavLink to='/'>
        <Logo />
      </NavLink>
      <h1>{TITLE}</h1>

      <div className={styles.profileWrapper}>
        <div className={styles.dropDownProfile}>
          <DropDownMenu logOutHandler={signOutHandler} />
        </div>
        <User.PersonInfo />
      </div>
    </header>
  );
};
