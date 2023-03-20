import { FormTypeStep } from '../types';
import { ResetPasswordFieldNames } from '../../../../shared/lib';

export type FormType = FormTypeStep<ResetPasswordFieldNames>;

export type ResetPassRequest = {
  password: string;
  passwordConfirmation: string;
  code: string;
};
