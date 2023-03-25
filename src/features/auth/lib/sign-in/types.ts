import { FieldNames } from './fields-data';
import { FormTypeStep } from '../types';

export type StateTypes = {
  isLoading: boolean;
  isSuccess: boolean;
  errorMessage: string;
};

export type AuthorisationRequestType = {
  identifier: string;
  password: string;
};

export type FormType = FormTypeStep<FieldNames>;
