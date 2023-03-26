import { Nullable } from '../types';
import { BASE_URL } from '../config';

export const getImageSrc = (url?: Nullable<string>) => `${BASE_URL}${url}`;
