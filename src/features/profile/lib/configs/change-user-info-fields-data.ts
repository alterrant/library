import { dataFieldsStep1, dataFieldsStep2, dataFieldsStep3, FieldNamesStep1 } from 'features/auth/lib';
import { FormFieldsDataTypes } from 'shared/lib';
import { ProfileFieldNamesType } from '../types/change-user-info';
// TODO: решить импорты из features: лишняя ответственность

enum NewField {
  LOGIN = 'login',
  PASSWORD = 'password',
}
const newFieldData = dataFieldsStep1.map((field) => {
  if (field.name === FieldNamesStep1.LOGIN) return { ...field, name: NewField.LOGIN };
  return field;
}) as FormFieldsDataTypes<NewField>[];

export const changeUserInfoDataFields: FormFieldsDataTypes<keyof ProfileFieldNamesType>[] = [
  ...newFieldData,
  ...dataFieldsStep2,
  ...dataFieldsStep3,
];
