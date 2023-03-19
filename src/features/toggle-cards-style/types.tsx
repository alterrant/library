import { Dispatch, MouseEvent } from 'react';

import { CardStylesTypes } from '../../shared/lib';

export type SVGMouseEventType = MouseEvent<SVGElement, MouseEvent>;
export type ToggleStyleType = Dispatch<CardStylesTypes>;
