import { PayloadAction } from '@reduxjs/toolkit';

export type ProfileStateType = {
  isLoading: boolean;
  success: string;
  error: string;
};

export type SetSuccessPayloadType = PayloadAction<string>;
export type SetUserErrorActionType = PayloadAction<string>;
