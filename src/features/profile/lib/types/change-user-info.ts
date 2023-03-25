import { Dispatch } from 'react';
import { PayloadAction } from '@reduxjs/toolkit';

import { DefaultUserInfoType } from 'shared/lib';

export type FormStatusType = {
  isChangeable: boolean;
};

export type SetFormStatusType = Dispatch<FormStatusType>;

export type ChangeUserInfoRequest = DefaultUserInfoType;

export type ProfileFieldNamesType = Omit<DefaultUserInfoType, 'username'> & { login: string };

export type ChangeUserInfoActionType = PayloadAction<ChangeUserInfoRequest>;
