import { Dispatch } from'react';

import { CardStylesTypes } from '../../../shared/lib';

export type SVGMouseEventType = React.MouseEvent<SVGElement, MouseEvent>;
export type ToggleStyleType = Dispatch<CardStylesTypes>;
