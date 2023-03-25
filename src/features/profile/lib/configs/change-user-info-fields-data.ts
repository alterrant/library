import { AuthLib } from 'features/auth';

import {
  ErrorMessages,
  validators,
  PLACEHOLDERS,
  INPUT_TYPES,
  FormFieldsDataTypes,
} from 'shared/lib';
import { ChangeUserInfoTypes } from '../types';
// TODO: решить импорты из features: лишняя ответственность

export const changeUserInfoDataFields: FormFieldsDataTypes<keyof ChangeUserInfoTypes.ProfileFieldNamesType>[] = [];

const { dataFields: signUpDataFields } = AuthLib.signUpConfig;

signUpDataFields.forEach((item) => changeUserInfoDataFields.push(...item))

// пока убрал, чтобы можно было вручную настраивать валидацию
/* const { FieldNamesStep1, FieldNamesStep2, FieldNamesStep3 } = AuthLib.signUpConfig;

 export const ProfileFieldNames = {
  ...FieldNamesStep1,
  ...FieldNamesStep2,
  ...FieldNamesStep3,
};

export const changeUserInfoDataFields: FormFieldsDataTypes<keyof ProfileFieldNamesType>[] = [
  {
    type: INPUT_TYPES.TEXT,
    name: ProfileFieldNames.LOGIN,
    helpText: ErrorMessages.INVALID_LOGIN,
    placeholder: PLACEHOLDERS.IMAGINE_LOGIN,
    label: PLACEHOLDERS.IMAGINE_LOGIN,
    validationRules: {
      required: ErrorMessages.REQUIRE,
      validate: (value: string) => validators.loginValidator(value),
    },
  },
  {
    type: INPUT_TYPES.PASSWORD,
    name: ProfileFieldNames.PASSWORD,
    helpText: ErrorMessages.INVALID_PASSWORD,
    placeholder: PLACEHOLDERS.PASSWORD,
    label: PLACEHOLDERS.PASSWORD,
    validationRules: {
      required: ErrorMessages.REQUIRE,
      validate: (value: string) => validators.passwordValidator(value),
    },
  },
  {
    type: INPUT_TYPES.TEXT,
    name: ProfileFieldNames.FIRST_NAME,
    placeholder: PLACEHOLDERS.FIRST_NAME,
    label: PLACEHOLDERS.FIRST_NAME,
    validationRules: {
      required: ErrorMessages.REQUIRE,
    },
  },
  {
    type: INPUT_TYPES.TEXT,
    name: ProfileFieldNames.LAST_NAME,
    placeholder: PLACEHOLDERS.LAST_NAME,
    label: PLACEHOLDERS.LAST_NAME,
    validationRules: {
      required: ErrorMessages.REQUIRE,
    },
  },
  {
    type: INPUT_TYPES.TEL,
    name: ProfileFieldNames.PHONE,
    helpText: ErrorMessages.INVALID_PHONE,
    placeholder: PLACEHOLDERS.PHONE_NUMBER,
    label: PLACEHOLDERS.PHONE_NUMBER,
    validationRules: {
      required: ErrorMessages.REQUIRE,
      validate: (value: string) => validators.phoneValidator(value),
    },
  },
  {
    type: INPUT_TYPES.EMAIL,
    name: ProfileFieldNames.EMAIL,
    placeholder: PLACEHOLDERS.EMAIL,
    label: PLACEHOLDERS.EMAIL,
    validationRules: {
      required: ErrorMessages.REQUIRE,
      validate: (value: string) => validators.emailValidator(value),
    },
  },
]; */

