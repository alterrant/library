import { BookingInfo } from '../../config';

export const getBookingMaskSubtitle = (isBookingExpired: boolean) =>
  isBookingExpired ? BookingInfo.WARNING_MASK_SUBTITLE : null;
