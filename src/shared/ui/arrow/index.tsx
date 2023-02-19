import classNames from "classnames";

import {ORIENTATION} from "../../lib";
import {RightArrow} from "..";

import styles from "./arrow.module.css";

type ArrowProps = {
    orientation: typeof ORIENTATION[keyof typeof ORIENTATION];
    isColored?: boolean;
};

export const Arrow = ({ orientation, isColored }: ArrowProps) => (
    <RightArrow className={classNames(
        styles.arrow,
        isColored && styles.colored,
        styles[orientation]
    )} />
);
