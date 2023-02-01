import { Dispatch } from'react';

import { CardStylesTypes } from '../../../shared/config';

export type SVGMouseEventType = React.MouseEvent<SVGElement, MouseEvent>;
export type ToggleStyleType = Dispatch<CardStylesTypes>;
