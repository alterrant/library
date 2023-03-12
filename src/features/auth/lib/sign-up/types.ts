import { Dispatch } from 'react';

import { FieldNamesStep1, FieldNamesStep2, FieldNamesStep3 } from './fields-data';
import { FieldNameTypes, FormTypeStep } from '../types';
import { FormFieldsDataTypes } from '../../../../shared/lib';

export type RegistrationRequest = {
    email: string;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    phone: string;
};
export type Step = 0 | 1 | 2;
export type SetStep = Dispatch<Step>;

export type UserInfo = Record<keyof RegistrationRequest, string>;
export type SetUserInfo = Dispatch<UserInfo>;

export type StepsFieldNames = FieldNamesStep1 | FieldNamesStep2 | FieldNamesStep3;
export type FormType = FormTypeStep<StepsFieldNames>;

export type FieldNameTypesStep1 = FieldNameTypes<typeof FieldNamesStep1>;
export type FieldNameTypesStep2 = FieldNameTypes<typeof FieldNamesStep2>;
export type FieldNameTypesStep3 = FieldNameTypes<typeof FieldNamesStep3>;

export type FieldNameStepsTypes = FieldNameTypesStep1 | FieldNameTypesStep2 | FieldNameTypesStep3;

export type DataFieldsType<T = FieldNameStepsTypes> = FormFieldsDataTypes<T>
export type DatumFieldsTypes<T = DataFieldsType[]> = readonly [T, T, T];
