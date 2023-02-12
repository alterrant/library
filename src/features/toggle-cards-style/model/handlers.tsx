import { CARD_STYLES } from 'shared/lib';

import { CardStylesTypes } from '../../../shared/lib';
import { SVGMouseEventType, ToggleStyleType } from '../config';

// TODO: вынести toggleHandler из module в utils или helpers
export const toggleHandler = (
    style: CardStylesTypes,
    toggleStyle: ToggleStyleType,
    event: SVGMouseEventType
) => {
    const currentTargetStyle = event.currentTarget.id;
    const getNewStyle = () => style === CARD_STYLES.ROW ? CARD_STYLES.COLUMN : CARD_STYLES.ROW;

    if (style !== currentTargetStyle) toggleStyle(getNewStyle());
};
