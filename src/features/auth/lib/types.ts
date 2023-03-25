import { PayloadAction } from '@reduxjs/toolkit';

import { forgotPassConfig, resetPassConfig, signInConfig, signUpConfig } from '.';

export type FormTypeStep<T extends string> = Record<T, string>;
export type FieldNameTypes<T> = T[keyof T];

export type AuthorisationActionType = PayloadAction<signInConfig.Types.AuthorisationRequestType>;
export type RegistrationActionType = PayloadAction<signUpConfig.Types.RegistrationRequestType>;
export type ForgotPassAttemptActionType = PayloadAction<forgotPassConfig.Types.ForgotPasswordRequest>;
export type ResetPassAttemptActionType = PayloadAction<resetPassConfig.Types.ResetPassRequest>;
export type SetErrorActionType = PayloadAction<string>;
