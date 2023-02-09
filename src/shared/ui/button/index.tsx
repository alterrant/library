import React, { ReactNode } from 'react';
import classNames from 'classnames';

import { BUTTON_TYPES } from './config';

import styles from './button-style.module.css';

type ButtonType = {
    dataTestId?: string;
    type?: typeof BUTTON_TYPES[keyof typeof BUTTON_TYPES];
    buttonText?: string | ReactNode;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    classImg?: string;
    classText?: any,
    classButton?: any,
    src?: string;
    loading?: boolean;
    children?: ReactNode;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonType>(
    (
        {
            dataTestId,
            classText,
            classButton,
            buttonText,
            disabled = false,
            onClick,
            type = BUTTON_TYPES.BUTTON,
            classImg,
            src,
            loading,
            children,
        },
        ref
    ) => {
        const buttonTextClass = classNames(classText);
        const buttonClass = classNames(styles.button, classButton);

        return (
            <button
                data-test-id={dataTestId}
                ref={ref}
                className={buttonClass}
                disabled={disabled}
                onClick={onClick}
                type={type}
            >
                {buttonText && <span className={buttonTextClass}>{buttonText}</span>}
                {src && <img className={classImg} src={src} alt="img"/>}
                {children}
            </button>
        )
    }
);
