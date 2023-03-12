import {ErrorMessages} from '../../../../shared/lib';

export const checkInvalidAuthorisationMessage = (errorMessage: string) =>
    errorMessage === ErrorMessages.INVALID_AUTHORISATION;
