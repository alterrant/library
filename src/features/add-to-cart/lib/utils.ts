import { BookStatus, ButtonText, timeFormatOptions } from './config';
import { getDate, Nullable } from '../../../shared/lib';
import { BookingType, DeliveryType } from '../../../entities/books/lib';

const checkBookedByUser = (bookStatus: BookStatus) => bookStatus === BookStatus.BOOKED_BY_USER;

export const checkBookedByCurrentUser = (bookStatus: BookStatus) =>
  bookStatus === BookStatus.BOOKED_BY_CURRENT_USER;

const checkBookingStatus = (bookStatus: BookStatus) =>
  checkBookedByUser(bookStatus) || checkBookedByCurrentUser(bookStatus);

const checkDeliveryStatus = (bookStatus: BookStatus) => bookStatus === BookStatus.DELIVERED;

const getDeliveredString = (deliveredDate: string) => `${ButtonText.DELIVERED}${deliveredDate}`;

export const getButtonText = (bookStatus: BookStatus, dateOrder?: Nullable<string>) => {
  const isBooked = checkBookingStatus(bookStatus);
  const isDelivered = checkDeliveryStatus(bookStatus);

  if (isDelivered) {
    const deliveredDate = getDate(dateOrder, timeFormatOptions);

    return getDeliveredString(deliveredDate);
  }

  if (isBooked) return ButtonText.BOOKED;

  return ButtonText.BOOKING;
};

export const checkDisableStatus = (bookStatus: BookStatus) => {
  const isBookedByUser = checkBookedByUser(bookStatus);
  const isDelivered = checkDeliveryStatus(bookStatus);

  return isBookedByUser || isDelivered;
};

export const getBookStatus = (
  booking: Nullable<BookingType>,
  delivery: Nullable<DeliveryType>,
  currentUserId: number
) => {
  if (booking) {
    const checkBookedByCurrentUser = (booking: BookingType, currentUserId: number) =>
      booking.customerId === currentUserId;

    const isBookedByCurrentUser = checkBookedByCurrentUser(booking, currentUserId);

    return isBookedByCurrentUser ? BookStatus.BOOKED_BY_CURRENT_USER : BookStatus.BOOKED_BY_USER;
  }

  if (delivery) return BookStatus.DELIVERED;

  return BookStatus.AVAILABLE;
};
