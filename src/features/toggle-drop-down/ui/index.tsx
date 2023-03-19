import classNames from 'classnames';
import { ReactNode } from 'react';

import { Button } from '../../../shared/ui';

import styles from './toggle-drop-down.module.css';

type ToggleDropDownMenuProps = {
  dataTestId?: string;
  handleClick: () => void;
  isMenuOpened: boolean;
  menuClass?: string;
  openedMenuClass?: string;
  hiddenElementClass?: string;
  hiddenElement: ReactNode;
  children: ReactNode;
};
// TODO: сделать анимацию для visible/hide menu
export const ToggleDropDown = ({
  dataTestId,
  handleClick,
  isMenuOpened,
  hiddenElement,
  menuClass,
  openedMenuClass,
  hiddenElementClass,
  children,
}: ToggleDropDownMenuProps) => {
  const buttonClass = classNames(menuClass, isMenuOpened && openedMenuClass);
  const hiddenElementClassName = classNames(
    hiddenElementClass,
    isMenuOpened ? styles.visibleElement : styles.hiddenElement
  );

  return (
    <>
      <Button dataTestId={dataTestId} onClick={handleClick} classButton={buttonClass}>
        {children}
      </Button>
      <div className={hiddenElementClassName}>{hiddenElement}</div>
    </>
  );
};
