import classNames from 'classnames';

import {
  validators,
  ValidationRulesTypes,
  ErrorMessages,
  INPUT_TYPES,
  InputTypes,
  ResetPasswordFieldNames,
} from 'shared/lib';

import styles from '../ui/form-input.module.css';

export const getValidationRules = (
  validationRules: ValidationRulesTypes | undefined,
  name: string,
  controlField: string
) => {
  if (validationRules && name === ResetPasswordFieldNames.RETRY_PASSWORD) {
    return {
      ...validationRules,
      validate: (fieldValue: string) =>
        validationRules.validate!(fieldValue) &&
        validators.retryPasswordValidation(fieldValue, controlField),
    };
  }
  return validationRules;
};

type ErrorMessageType = string | undefined;

const checkRequireError = (errorMessage: ErrorMessageType) =>
  errorMessage === ErrorMessages.REQUIRE;

const checkHiddenError = (errorMessage: ErrorMessageType) =>
  errorMessage === ErrorMessages.HIDDEN_ERROR;

const checkPasswordType = (type: InputTypes) => type === INPUT_TYPES.PASSWORD;
const checkTelType = (type: InputTypes) => type === INPUT_TYPES.TEL;

type GetChecksTypes = { errorMessage: ErrorMessageType; type: InputTypes };

export const getChecks = ({ errorMessage, type }: GetChecksTypes) => {
  const isPasswordType = checkPasswordType(type);
  const isTelType = checkTelType(type);
  const isHiddenError = checkHiddenError(errorMessage);
  const isRequireError = checkRequireError(errorMessage);

  return {
    isPasswordType,
    isTelType,
    isHiddenError,
    isRequireError,
  };
};

const getInputWrapperClass = (inputValue: string) =>
  classNames(styles.inputWrapper, !inputValue && styles.emptyInput);

const getShowPasswordClass = () => classNames(styles.hidePassword, styles.button);

const getUnderlineClass = (errorMessage: ErrorMessageType) =>
  classNames(errorMessage ? styles.underlineError : styles.underline);

type GetClassNamesTypes = { errorMessage: ErrorMessageType; inputValue: string };

export const getClassNames = ({ errorMessage, inputValue }: GetClassNamesTypes) => {
  const showPasswordClass = getShowPasswordClass();
  const inputWrapperClass = getInputWrapperClass(inputValue);
  const underlineClass = getUnderlineClass(errorMessage);

  return {
    inputWrapperClass,
    showPasswordClass,
    underlineClass,
  };
};
