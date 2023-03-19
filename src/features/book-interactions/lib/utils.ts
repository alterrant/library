import {
  BookingResponseDataType, Nullable,
  UpdateBookingPayloadType,
  UpdateCommentResponseDataType,
} from '../../../shared/lib';
import { UserType } from '../../auth/lib';
import { BookCommentType } from '../../../entities/book';

export const compareDates = (date1: string, date2: string) =>
  Date.parse(date1) === Date.parse(date2);

export const convertToStoreComment = (
  data: UpdateCommentResponseDataType,
  user: UserType
): BookCommentType => {
  const { id, attributes } = data;
  const { rating, text, createdAt } = attributes;
  const { id: commentUserId, firstName, lastName } = user;
  return {
    id,
    rating,
    text,
    createdAt,
    user: { commentUserId, firstName, lastName, avatarUrl: null },
  };
};

export const convertToStoreBookingPayload = (
  data: any,
  /* data: Nullable<BookingResponseDataType>, */
  user: UserType,
  bookId: number
): any => {
/* ): UpdateBookingPayloadType => { */
  if (!data) return { id: bookId, booking: null };
  // для тестов
  if (!data.attributes?.dateOrder) {
    return {
      id: bookId,
      booking: {
        id: data.book,
        order: data.order,
        dateOrder: data.dateOrder,
        customerId: user.id,
        customerFirstName: user.firstName,
        customerLastName: user.lastName,
      },
    }
  }

  const { id, attributes } = data;
  const { order, dateOrder } = attributes;
  const { id: commentUserId, firstName, lastName } = user;

  return {
    id: bookId,
    booking: {
      id,
      order,
      dateOrder,
      customerId: commentUserId,
      customerFirstName: firstName,
      customerLastName: lastName,
    },
  };
};
