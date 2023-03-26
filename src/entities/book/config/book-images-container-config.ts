import { unsetBook } from '../../../shared/ui';

import styles from '../ui/book-images-container/book-images-swiper.module.css';

export const initialSlidesPerView = 1;
export const initialSpaceBetween = 50;

export const initialBreakpoints = {
  769: {
    pagination: {
      enabled: false,
    },
  },
};

export const initialPagination = {
  bulletActiveClass: styles.activeBullet,
  horizontalClass: styles.pagination,
  clickable: true,
  enabled: true,
};

export const initialSpaceBetweenThumbs = 30;
export const initialSlidesPerViewThumbs = 'auto';

export const initialSlide = 0;
export const initialImgURL = unsetBook;
