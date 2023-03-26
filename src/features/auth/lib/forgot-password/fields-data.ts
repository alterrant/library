import {
  ErrorMessages,
  validators,
  PLACEHOLDERS,
  INPUT_TYPES,
  FormFieldsDataTypes,
} from 'shared/lib';

export enum FieldName {
  EMAIL = 'email',
}

export const fieldData: FormFieldsDataTypes<FieldName> = {
  type: INPUT_TYPES.EMAIL,
  name: FieldName.EMAIL,
  placeholder: PLACEHOLDERS.EMAIL,
  label: PLACEHOLDERS.EMAIL,
  validationRules: {
    required: ErrorMessages.REQUIRE,
    validate: (value: string) => validators.emailValidator(value),
  },
};
