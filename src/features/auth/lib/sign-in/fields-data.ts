import { FieldNameTypes } from '../types';
import {
    ErrorMessages,
    PLACEHOLDERS,
    INPUT_TYPES,
    FormFieldsDataTypes
} from '../../../../shared/lib';

export enum FieldNames {
    LOGIN = 'identifier',
    PASSWORD = 'password',
}

export const fieldsData: FormFieldsDataTypes<FieldNameTypes<typeof FieldNames>>[] = [
    {
        type: INPUT_TYPES.TEXT,
        placeholder: PLACEHOLDERS.LOGIN,
        label: PLACEHOLDERS.LOGIN,
        name: FieldNames.LOGIN,
        validationRules: {
            required: ErrorMessages.REQUIRE,
        },
    },
    {
        type: INPUT_TYPES.PASSWORD,
        name: FieldNames.PASSWORD,
        placeholder: PLACEHOLDERS.PASSWORD,
        label: PLACEHOLDERS.PASSWORD,
        validationRules: {
            required: ErrorMessages.REQUIRE,
        },
    },
];

