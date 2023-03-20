import { BookModel } from 'entities/book';
import { BooksModel } from 'entities/books';
import { convertToStoreBookingPayload, convertToStoreComment } from '.';
import {
  BookingResponseDataType,
  Nullable,
  UpdateCommentResponseDataType
} from '../../../shared/lib';
import { UserType } from '../../auth/lib';

export const addCommentHelper = (data: UpdateCommentResponseDataType, user: UserType) => {
  const { updateComments } = BookModel;
  const newComment = convertToStoreComment(data, user);

  return {
    updateComments,
    newComment,
  };
};

export const bookingHelper = (
  data: Nullable<BookingResponseDataType>,
  user: UserType,
  bookId: number
) => {
  const { updateBooking: updateBooksBooking } = BooksModel;
  const { updateBooking: updateBookBooking } = BookModel;
  const newBooking = convertToStoreBookingPayload(data, user, bookId);

  return {
    newBooking,
    updateBooksBooking,
    updateBookBooking,
  };
};
