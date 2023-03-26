import { SwiperSlide } from 'swiper/react';

import { Nullable } from 'shared/lib';
import { Img } from 'shared/ui';
import { ImgSlideType, initialImgURL, initialSlide } from '../../config';

type ImageConfigType = {
  id: number;
  url: string;
};

const getSlide = ({ id, url }: ImageConfigType, dataTestId?: string) => (
  <SwiperSlide key={id}>
    <Img url={url} alt='swiper' loading='lazy' defaultSrc={initialImgURL} dataTestId={dataTestId} />
    <div className='swiper-lazy-preloader' />
  </SwiperSlide>
);

// getSlide и getSwiperSlides не могут быть компонентами. Только функциями - требование свайпера
// внутри Swiper только компоненты SwiperSlide библиотеки swiper
export const getSwiperSlides = (images: Nullable<ImgSlideType[]>, dataTestId?: string) => {
  if (images?.length) {
    return images.map((image, index) => {
      const slideConfig = { id: index, url: image.url };

      return getSlide(slideConfig, dataTestId);
    });
  }

  const initialSlideConfig = { id: initialSlide, url: initialImgURL };

  return getSlide(initialSlideConfig, dataTestId);
};
