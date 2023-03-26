import { Nullable } from 'shared/lib';
import { ImgSlideType } from '../../config';

export const checkIsEmptyImages = (images: Nullable<ImgSlideType[]>) => images && images.length > 1;
