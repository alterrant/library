import classNames from 'classnames';
import { useState } from 'react';
import { Swiper } from 'swiper/react';
import { Navigation, Pagination, Thumbs, Swiper as SwiperInterface } from 'swiper';

import { getSwiperSlides, ImgSlideType } from '../../lib';
import { Nullable } from '../../../../shared/lib';

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

  return (
    <div className={styles.swiperWrapper}>
      <Swiper
        data-test-id='slide-big'
        slidesPerView={1}
        spaceBetween={50}
        thumbs={{
          swiper: swiperInstance && !swiperInstance.destroyed ? swiperInstance : null,
        }}
        pagination={{
          bulletActiveClass: styles.activeBullet,
          horizontalClass: styles.pagination,
          clickable: true,
          enabled: true,
        }}
        modules={[Pagination, Thumbs]}
        breakpoints={{
          769: {
            pagination: {
              enabled: false,
            },
          },
        }}
      >
        {getSwiperSlides(images)}
      </Swiper>
      {images && images.length > 1 && (
        <Swiper
          onSwiper={setSwiperInstance}
          className={classNames(
            styles.swiperThumbs,
            images.length < 5 && styles.centeredSwiperThumbs
          )}
          spaceBetween={30}
          slidesPerView='auto'
          freeMode={true}
          watchSlidesProgress={true}
          modules={[Navigation, Thumbs]}
        >
          {getSwiperSlides(images, 'slide-mini')}
        </Swiper>
      )}
    </div>
  );
};
