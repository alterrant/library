import { useState } from 'react';
import { CARD_STYLES } from 'shared/config';

import { CardStylesTypes } from '../../../shared/config';
import { SVGMouseEventType, ToggleStyleType } from '../config';

export const useToggleCardsState = (cardsStyle: CardStylesTypes): [CardStylesTypes, ToggleStyleType] => {
    const [style, toggleStyle] = useState<CardStylesTypes>(cardsStyle);

    return [style, toggleStyle]
};

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
