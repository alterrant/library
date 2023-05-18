import React, { ReactNode } from 'react';
import classNames from 'classnames';

import { ButtonTypes } from '../../lib';

import styles from './button-style.module.css';

type ButtonProps = {
  type?: (typeof ButtonTypes)[keyof typeof ButtonTypes];
  buttonText?: string | ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isDisabled?: boolean;
  classImg?: string;
  classText?: any;
  classButton?: any;
  src?: string;
  loading?: boolean;
  children?: ReactNode;
  specialTextForTests?: boolean;
  isWrappedButtonText?: boolean;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      classText,
      classButton,
      buttonText,
      isDisabled = false,
      onClick,
      type = ButtonTypes.BUTTON,
      classImg,
      src,
      loading,
      specialTextForTests,
      isWrappedButtonText,
      children,
    },
    ref
  ) => {
    // const buttonTextClass = classNames(classText);
    const buttonClass = classNames(styles.button, classButton, classText);

    return (
      <button
        ref={ref}
        className={buttonClass}
        disabled={isDisabled}
        onClick={onClick}
        type={type}
      >
        {isWrappedButtonText ? <p className={classText}>{buttonText}</p> : buttonText}
        {src && <img className={classImg} src={src} alt='img' />}
        {children}
      </button>
    );
  }
);
