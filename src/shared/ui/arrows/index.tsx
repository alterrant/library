import { getClassName } from './utils';
import { FootRightArrow, RightArrow } from '..';
import { DispatchAnyType, ORIENTATION } from '../../lib';

type ArrowProps = {
  orientation: ORIENTATION;
  isColored?: boolean;
  className?: string;
  onClick?: DispatchAnyType;
};

export const FootArrow = ({
  orientation,
  isColored = false,
  className,
  onClick,
}: ArrowProps) => (
  <FootRightArrow
    className={getClassName(orientation, isColored, className)}
    onClick={onClick}
  />
);

export const Arrow = ({
  orientation,
  isColored = false,
  className,
  onClick,
}: ArrowProps) => (
  <RightArrow
    className={getClassName(orientation, isColored, className)}
    onClick={onClick}
  />
);
