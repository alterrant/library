import { SwiperSlide } from 'swiper/react';

import { Nullable } from 'shared/lib';
import { Img, Preloader } from 'shared/ui';
import { ImgSlideType, initialImgURL, initialSlide } from '../../config';

type ImageConfigType = {
  id: number;
  url: string;
};

const getSlide = ({ id, url }: ImageConfigType) => (
  <SwiperSlide key={id}>
    <Img url={url} alt='swiper' loading='lazy' defaultSrc={initialImgURL} />
    <Preloader className='swiper-lazy-preloader' />
  </SwiperSlide>
);

// getSlide и getSwiperSlides не могут быть компонентами. Только функциями - требование свайпера
// внутри Swiper только компоненты SwiperSlide библиотеки swiper
export const getSwiperSlides = (images: Nullable<ImgSlideType[]>) => {
  if (images?.length) {
    return images.map((image, index) => {
      const slideConfig = { id: index, url: image.url };

      return getSlide(slideConfig);
    });
  }

  const initialSlideConfig = { id: initialSlide, url: initialImgURL };

  return getSlide(initialSlideConfig);
};
