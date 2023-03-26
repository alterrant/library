import classNames from 'classnames';

import { Nullable } from 'shared/lib';
import { ImgSlideType } from '../../config';

import swiperStyles from '../../ui/book-images-container/book-images-swiper.module.css';

export const getThumbsClassName = (images: Nullable<ImgSlideType[]>) => {
  if (images) return classNames(swiperStyles.swiperThumbs, images.length < 5 && swiperStyles.centeredSwiperThumbs);
};
