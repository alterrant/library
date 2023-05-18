import classNames from 'classnames';
import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

type ListProps = {
  handleClick?: () => void;
  link: string;
  text: string;
  textClass: string;
  activeLinkClass?: string;
  linkClass?: string;
  children?: ReactNode;
};

export const NavList = ({
  handleClick,
  link,
  text,
  children,
  textClass,
  activeLinkClass,
  linkClass,
}: ListProps) => {
  // При необходимости вынести в handlers
  const onClick = () => {
    if (handleClick) handleClick();
  };

  return (
    <li onClick={onClick}>
      <NavLink
        to={link}
        className={({ isActive }) => classNames(isActive && activeLinkClass, linkClass)}
      >
        <span className={textClass}>
          {text}
        </span>
        {children}
      </NavLink>
    </li>
  );
};
