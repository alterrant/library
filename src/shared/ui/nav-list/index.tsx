import classNames from "classnames";
import {Dispatch, ReactNode} from 'react';
import { NavLink } from 'react-router-dom';

type ListProps = {
    handleClick?: Dispatch<boolean>;
    dataTestId?:string;
    link: string;
    text: string;
    textClass: string;
    activeLinkClass?: string;
    linkClass?: string;
    children?: ReactNode;
};

export const NavList = ({
    handleClick,
    dataTestId,
    link,
    text,
    children,
    textClass,
    activeLinkClass,
    linkClass
}: ListProps) => {
    // При необходимости вынести в handlers
    const onClick = () => {
        if (handleClick) handleClick(false);
    }

    return (
        <li onClick={onClick} data-test-id={dataTestId}>
            <NavLink to={link} className={
                ({isActive}) => classNames(isActive && activeLinkClass, linkClass)
            }>
            <span className={textClass}>
                {text}
            </span>
                {children}
            </NavLink>
        </li>
    );
}
