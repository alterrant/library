import { getClassName } from './utils';
import { FootRightArrow, RightArrow } from '..';
import { DispatchAnyType, ORIENTATION } from '../../lib';

type ArrowProps = {
  dataTestId?: string;
  orientation: ORIENTATION;
  isColored?: boolean;
  className?: string;
  onClick?: DispatchAnyType;
};

export const FootArrow = ({
  dataTestId,
  orientation,
  isColored = false,
  className,
  onClick,
}: ArrowProps) => (
  <FootRightArrow
    data-test-id={dataTestId}
    className={getClassName(orientation, isColored, className)}
    onClick={onClick}
  />
);

export const Arrow = ({
  dataTestId,
  orientation,
  isColored = false,
  className,
  onClick,
}: ArrowProps) => (
  <RightArrow
    data-test-id={dataTestId}
    className={getClassName(orientation, isColored, className)}
    onClick={onClick}
  />
);
