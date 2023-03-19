import { FieldNames } from './fields-data';
import { FormTypeStep, UserType } from '../types';

export type StateTypes = {
  isLoading: boolean;
  isSuccess: boolean;
  errorMessage: string;
  user: UserType;
};

export type MeRequest = {
  identifier: string;
  password: string;
};

export type FormType = FormTypeStep<FieldNames>;
