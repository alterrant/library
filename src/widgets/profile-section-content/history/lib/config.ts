export const LEAVE_FEEDBACK = 'Оставить отзыв';

export const initialSlidesPerView = 1;
export const initialStaceBetween = 35;

export const initialPagination = {
  clickable: true,
  dynamicBullets: true,
  dynamicMainBullets: 1,
};

export const initialBreakpoints = {
  320: {
    slidesPerView: 2,
    spaceBetween: 35,
    pagination: {
      dynamicMainBullets: 2,
    },
  },
  768: {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
      dynamicMainBullets: 1,
    },
  },
};
