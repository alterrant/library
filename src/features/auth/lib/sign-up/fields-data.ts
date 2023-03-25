import { Types } from '.';
import {
  ErrorMessages,
  validators,
  PLACEHOLDERS,
  INPUT_TYPES,
  FormFieldsDataTypes,
} from '../../../../shared/lib';

export enum FieldNamesStep1 {
  LOGIN = 'login',
  PASSWORD = 'password',
}
export enum FieldNamesStep2 {
  FIRST_NAME = 'firstName',
  LAST_NAME = 'lastName',
}
export enum FieldNamesStep3 {
  PHONE = 'phone',
  EMAIL = 'email',
}

const dataFieldsStep1: FormFieldsDataTypes<Types.FieldNameTypesStep1>[] = [
  {
    type: INPUT_TYPES.TEXT,
    name: FieldNamesStep1.LOGIN,
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
    name: FieldNamesStep1.PASSWORD,
    helpText: ErrorMessages.INVALID_PASSWORD,
    placeholder: PLACEHOLDERS.PASSWORD,
    label: PLACEHOLDERS.PASSWORD,
    validationRules: {
      required: ErrorMessages.REQUIRE,
      validate: (value: string) => validators.passwordValidator(value),
    },
  },
];

const dataFieldsStep2: FormFieldsDataTypes<Types.FieldNameTypesStep2>[] = [
  {
    type: INPUT_TYPES.TEXT,
    name: FieldNamesStep2.FIRST_NAME,
    placeholder: PLACEHOLDERS.FIRST_NAME,
    label: PLACEHOLDERS.FIRST_NAME,
    validationRules: {
      required: ErrorMessages.REQUIRE,
    },
  },
  {
    type: INPUT_TYPES.TEXT,
    name: FieldNamesStep2.LAST_NAME,
    placeholder: PLACEHOLDERS.LAST_NAME,
    label: PLACEHOLDERS.LAST_NAME,
    validationRules: {
      required: ErrorMessages.REQUIRE,
    },
  },
];
const dataFieldsStep3: FormFieldsDataTypes<Types.FieldNameTypesStep3>[] = [
  {
    type: INPUT_TYPES.TEL,
    name: FieldNamesStep3.PHONE,
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
    name: FieldNamesStep3.EMAIL,
    placeholder: PLACEHOLDERS.EMAIL,
    label: PLACEHOLDERS.EMAIL,
    validationRules: {
      required: ErrorMessages.REQUIRE,
      validate: (value: string) => validators.emailValidator(value),
    },
  },
];

export const dataFields: Types.DatumFieldsTypes = [
  dataFieldsStep1,
  dataFieldsStep2,
  dataFieldsStep3,
];
