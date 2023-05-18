import { ErrorMessages } from 'shared/lib';
import { CheckErrorsType, CheckSuccessesType } from './types';
import { ErrorSelectorNames } from './config';

export const getErrorText = (ErrorsState: CheckErrorsType) =>
  ErrorsState.errorSelector === ErrorSelectorNames.bookInteractionsError
    ? ErrorsState.errorMessage
    : ErrorMessages.RELOAD_PAGE;

export const getWarningText = (ErrorsState: CheckErrorsType, SuccessesState: CheckSuccessesType) =>
  (ErrorsState.isError && ErrorsState.errorMessage) ||
  (SuccessesState.isSuccess && SuccessesState.successMessage);
