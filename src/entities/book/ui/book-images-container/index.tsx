import { useState } from 'react';
import { Swiper } from 'swiper/react';
import { Navigation, Pagination, Thumbs, Swiper as SwiperInterface } from 'swiper';

import { Nullable } from 'shared/lib';
import {
  checkIsEmptyImages,
  getInitialThumbs,
  getSwiperSlides,
  getThumbsClassName,
} from '../../lib';
import {
  initialPagination,
  initialSlidesPerView,
  initialSpaceBetween,
  ImgSlideType,
  initialBreakpoints,
  initialSpaceBetweenThumbs,
  initialSlidesPerViewThumbs,
} from '../../config';

import styles from './book-images-swiper.module.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

type BookImagesContainerProps = {
  images: Nullable<ImgSlideType[]>;
};

export const BookImagesContainer = ({ images }: BookImagesContainerProps) => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperInterface>();

  const initialThumbs = getInitialThumbs(swiperInstance);
  const initialSwiperThumbsClassName = getThumbsClassName(images);

  const isEmptyImages = checkIsEmptyImages(images);

  return (
    <div className={styles.swiperWrapper}>
      <Swiper
        data-test-id='slide-big'
        slidesPerView={initialSlidesPerView}
        spaceBetween={initialSpaceBetween}
        thumbs={initialThumbs}
        pagination={initialPagination}
        modules={[Pagination, Thumbs]}
        breakpoints={initialBreakpoints}
      >
        {getSwiperSlides(images)}
      </Swiper>
      {isEmptyImages && (
        <Swiper
          onSwiper={setSwiperInstance}
          className={initialSwiperThumbsClassName}
          spaceBetween={initialSpaceBetweenThumbs}
          slidesPerView={initialSlidesPerViewThumbs}
          modules={[Navigation, Thumbs]}
          freeMode
          watchSlidesProgress
        >
          {getSwiperSlides(images, 'slide-mini')}
        </Swiper>
      )}
    </div>
  );
};
