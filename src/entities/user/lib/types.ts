import { PayloadAction } from '@reduxjs/toolkit';

import { DefaultUserInfoType } from '../../../shared/lib';

export type UserStateType = {
  isLoading: boolean;
  success: string;
  error: string;
  user: UserType;
};

type RoleType = {
  id: number;
  name: string;
  description: string;
  type: string;
};

export type CommentType = {
  id: number;
  rating: number;
  text: null;
  bookId: number;
};

type BookType = {
  id: number;
  title: string;
  rating: number;
  issueYear: null;
  authors: [string, string];
  image: null;
};

export type BookingType = {
  id: number;
  order: boolean;
  dateOrder: string;
  book: BookType;
};

export type HistoryType = {
  id: number;
  books: BookType[];
};

export type DeliveryType = {
  id: number;
  handed: boolean;
  dateHandedFrom: string;
  dateHandedTo: string;
  book: BookType;
};

type UserInfoType = Omit<DefaultUserInfoType, 'password'>;

export type UserType = UserInfoType & {
    id: number;
    confirmed: boolean;
    blocked: boolean;
    createdAt: string;
    updatedAt: string;
    avatar: string;
    booking: BookingType;
    delivery: DeliveryType;
    history: HistoryType;
    role: RoleType;
    comments: CommentType[];
  };

export type SetSuccessPayloadType = PayloadAction<string>;
export type SetUserErrorActionType = PayloadAction<string>;
export type SetUserActionType = PayloadAction<UserType>;
