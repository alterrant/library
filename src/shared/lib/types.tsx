import { Dispatch, SyntheticEvent } from 'react';
import { ValidationRule } from 'react-hook-form';
import { AnyAction } from 'redux';

import { CARD_STYLES, INPUT_TYPES, ORIENTATION } from './config';

export type DispatchAnyType = Dispatch<AnyAction>;

export type CardStylesTypes = typeof CARD_STYLES[keyof typeof CARD_STYLES];
export type InputEvent = SyntheticEvent<HTMLInputElement>;

export type Nullable<T> = T | null;

export type InputTypes = typeof INPUT_TYPES[keyof typeof INPUT_TYPES];

export type ValidationRulesTypes = {
    required?: ValidationRule<boolean> | string;
    min?: ValidationRule<number | string>;
    max?: ValidationRule<number | string>;
    maxLength?: ValidationRule<number>;
    minLength?: ValidationRule<number>;
    pattern?: ValidationRule<RegExp>;
    validate?: (value: string) => string | boolean;
};

export type FormFieldsDataTypes<NameTypes> = {
    name: NameTypes,
    label: string;
    helpText?: string;
    type: InputTypes;
    placeholder: string;
    img?: string;
    validationRules?: ValidationRulesTypes;
};

export type MessagesTemplateConfigTypes = {
    title: string;
    message: string;
    buttonText?: string;
};

export type LinkedTextWithArrowType = {
    clickHandler?: () => void;
    path: string;
    text: string;
    orientation: ORIENTATION;
};
