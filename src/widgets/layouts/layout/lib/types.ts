import { ErrorSelectorNames, SuccessSelectorNames } from './config';

export type CheckErrorsType = {
  errorSelector: '' | ErrorSelectorNames;
  isError: boolean;
  errorMessage: string;
};

export type CheckSuccessesType = {
  successSelector: '' | SuccessSelectorNames;
  isSuccess: boolean;
  successMessage: string;
};
