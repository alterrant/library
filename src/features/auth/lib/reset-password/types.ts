import { ResetPasswordFieldNames } from 'shared/lib';
import { FormTypeStep } from '../types';

export type FormType = FormTypeStep<ResetPasswordFieldNames>;

export type ResetPassRequest = {
  password: string;
  passwordConfirmation: string;
  code: string;
};
