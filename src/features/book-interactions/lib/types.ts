import { PayloadAction } from '@reduxjs/toolkit';

export type StateTypes = {
  isLoading: boolean;
  successMessage: string;
  errorMessage: string;
};

export type BookingAttemptType = {
  data: {
    order: boolean;
    dateOrder: string;
    book: string;
    customer: string;
  };
};

export type ChangeBookingDateAttemptType = {
  bookingId: number;
  bookingPayload: {
    data: {
      order: boolean;
      dateOrder: string;
      book: string;
      customer: string;
    };
  };
};

export type CancelBookingAttemptType = {
  bookingId: number;
  bookId: number;
};

export type AddCommentAttemptType = {
  data: {
    rating: number;
    text: string;
    book: string;
    user: string;
  };
};

export type ChangeCommentAttemptType = {
  commentPayload: {
    data: {
      rating: number;
      text: string;
      book: string;
      user: string;
    };
  }
  commentId?: number;
};

export type BookingPayloadType = PayloadAction<BookingAttemptType>;
export type ChangeBookingDatePayloadType = PayloadAction<ChangeBookingDateAttemptType>;
export type CancelBookingPayloadType = PayloadAction<CancelBookingAttemptType>;
export type AddCommentPayloadType = PayloadAction<AddCommentAttemptType>;
export type ChangeCommentPayloadType = PayloadAction<ChangeCommentAttemptType>;
export type SetErrorPayloadType = PayloadAction<string>;
export type SetSuccessPayloadType = PayloadAction<string>;
