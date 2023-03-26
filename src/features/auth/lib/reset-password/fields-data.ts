import {
  ErrorMessages,
  validators,
  PLACEHOLDERS,
  INPUT_TYPES,
  FormFieldsDataTypes,
  ResetPasswordFieldNames,
} from 'shared/lib';

export const dataFields: FormFieldsDataTypes<ResetPasswordFieldNames>[] = [
  {
    type: INPUT_TYPES.PASSWORD,
    name: ResetPasswordFieldNames.PASSWORD,
    helpText: ErrorMessages.INVALID_PASSWORD,
    placeholder: PLACEHOLDERS.NEW_PASSWORD,
    label: PLACEHOLDERS.NEW_PASSWORD,
    validationRules: {
      required: ErrorMessages.REQUIRE,
      validate: (value: string) => validators.passwordValidator(value),
    },
  },
  {
    type: INPUT_TYPES.PASSWORD,
    name: ResetPasswordFieldNames.RETRY_PASSWORD,
    placeholder: PLACEHOLDERS.REPEAT_PASSWORD,
    label: PLACEHOLDERS.REPEAT_PASSWORD,
    validationRules: {
      required: ErrorMessages.REQUIRE,
      validate: (value: string) => validators.passwordValidator(value),
    },
  },
];
