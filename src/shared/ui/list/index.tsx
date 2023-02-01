import classNames from "classnames";
import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

type ListProps = {
    link: string;
    text: string;
    textClass: string;
    activeLinkClass?: string;
    linkClass?: string;
    children?: ReactNode;
};

export const List = ({
    link,
    text,
    children,
    textClass,
    activeLinkClass,
    linkClass
}: ListProps) => (
    <li>
        <NavLink to={link} className={
            ({ isActive }) => classNames(isActive && activeLinkClass, linkClass)
        }>
            <span className={textClass}>
                {text}
            </span>
            {children}
        </NavLink>
    </li>
);
