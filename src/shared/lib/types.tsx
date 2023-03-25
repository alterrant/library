import { Dispatch, SyntheticEvent } from 'react';
import { ValidationRule } from 'react-hook-form';
import { AnyAction } from 'redux';
import { PayloadAction } from '@reduxjs/toolkit';

import { ModalNames } from 'features/book-interactions/lib/configs';
import { BookingType } from 'entities/books/lib';
import { CARD_STYLES, INPUT_TYPES, ORIENTATION } from './config';

export type DispatchAnyType = Dispatch<AnyAction>;

export type CardStylesTypes = (typeof CARD_STYLES)[keyof typeof CARD_STYLES];
export type InputEvent = SyntheticEvent<HTMLInputElement>;

export type Nullable<T> = T | null;
export type ObjectValuesType<T> = T[keyof T];

export type InputTypes = (typeof INPUT_TYPES)[keyof typeof INPUT_TYPES];

export type DefaultUserInfoType = {
  email: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
};

export type ValidationRulesTypes = {
  required?: ValidationRule<boolean> | string;
  min?: ValidationRule<number | string>;
  max?: ValidationRule<number | string>;
  maxLength?: ValidationRule<number>;
  minLength?: ValidationRule<number>;
  pattern?: ValidationRule<RegExp>;
  validate?: (value: string) => string | boolean;
};

export type FormFieldsDataTypes<NameTypes> = {
  name: NameTypes;
  label: string;
  helpText?: string;
  type: InputTypes;
  placeholder: string;
  img?: string;
  validationRules?: ValidationRulesTypes;
};

export type MessagesTemplateConfigTypes = {
  title: string;
  message: string;
  buttonText?: string;
};

export type LinkedTextWithArrowType = {
  clickHandler?: () => void;
  path: string;
  text: string;
  orientation: ORIENTATION;
};

export type SelectRatingStateType = {
  selectedRating: number;
};

export type ModalsStateType = {
  activeModal?: ModalNames | null;
  isOpen: boolean;
};

export type UpdateCommentResponseType = {
  data: UpdateCommentResponseDataType;
  meta: object;
};

export type UpdateCommentResponseDataType = {
  id: number;
  attributes: {
    rating: number;
    text: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
};

export type BookingResponseType = {
  data: BookingResponseDataType;
  meta: object;
};

export type BookingResponseDataType = {
  id: number;
  attributes: {
    order: boolean;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    dateOrder: string;
  };
};

export type UpdateBookingPayloadType = {
  id: number;
  booking: BookingType | null;
};

export type UpdateBookingActionType = PayloadAction<UpdateBookingPayloadType>;
