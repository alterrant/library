import { useState } from 'react';

import { CardStylesTypes } from '../../../shared/lib';
import { ToggleStyleType } from '../config';

export const useToggleCardsState = (cardsStyle: CardStylesTypes): [CardStylesTypes, ToggleStyleType] => {
    const [style, toggleStyle] = useState<CardStylesTypes>(cardsStyle);

    return [style, toggleStyle]
};
