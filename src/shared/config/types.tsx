import { SyntheticEvent } from 'react';
import { CARD_STYLES } from './config';

export type CardStylesTypes = typeof CARD_STYLES[keyof typeof CARD_STYLES];
export type InputEvent = SyntheticEvent<HTMLInputElement>;
