import { getClassName } from './utils';
import { FootRightArrow, RightArrow } from '..';
import { ORIENTATION } from '../../lib';

type ArrowProps = {
    orientation: ORIENTATION;
    isColored?: boolean;
};

export const FootArrow = ({ orientation, isColored = false }: ArrowProps) =>
    <FootRightArrow className={getClassName(orientation, isColored)} />;

export const Arrow = ({ orientation, isColored = false }: ArrowProps) =>
    <RightArrow className={getClassName(orientation, isColored)} />;
