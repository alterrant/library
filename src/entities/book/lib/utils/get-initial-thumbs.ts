import { Swiper as SwiperInterface } from 'swiper';

export const getInitialThumbs = (swiperInstance?: SwiperInterface) => ({
  swiper: swiperInstance && !swiperInstance.destroyed ? swiperInstance : null,
});
