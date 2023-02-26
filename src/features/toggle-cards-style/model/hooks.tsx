import { useState } from 'react';

import { ToggleStyleType } from '../types';
import { CardStylesTypes } from '../../../shared/lib';

export const useToggleCardsState = (cardsStyle: CardStylesTypes): [CardStylesTypes, ToggleStyleType] => {
    const [style, toggleStyle] = useState<CardStylesTypes>(cardsStyle);

    return [style, toggleStyle]
};
