import { BookingInfo } from '../../config';

export const getBookingMaskTitle = (isBookingExpired: boolean) =>
  isBookingExpired ? BookingInfo.WARNING_MASK_TITLE : BookingInfo.MASK_TITLE;
