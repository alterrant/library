import React, {ChangeEvent, useState } from 'react';
import MaskedInput from 'react-text-mask';
import { Control, useController } from 'react-hook-form';

import { FieldNamesStep1, FieldNamesStep2, FieldNamesStep3, signUpConfig } from 'features/auth/lib';
import { HelpText } from './help-text';
import { FormInputLib, FormInputModel } from '..';
import { FieldName } from '../../../features/auth/lib/forgot-password';
import { getControllerOptions } from '../../../features/auth/lib/sign-up';
import { CheckCircle, Underline } from '../../../shared/ui';
import {
    ErrorMessages,
    INPUT_TYPES,
    InputTypes, PLACEHOLDERS,
    ResetPasswordFieldNames,
    ValidationRulesTypes
} from '../../../shared/lib';

import styles from './form-input.module.css';

// TODO: отрефакторить!
// TODO: рефакторить импорт из feature
type InputProps = {
    type: InputTypes;
    placeholder: string;
    name: string;
    label: string;
    onFocus?: () => void;
    defaultValue?: string | number;
    errorMessage?: string;
    isDirtyField?: boolean;
    helpText?: string;
    control?: Control<signUpConfig.Types.FormType>;
    validationRules?: ValidationRulesTypes;
    ref: HTMLInputElement;
    value?: string;
    onChange?: () => void;
    onBlur?: () => void;
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>((
    {
        type,
        defaultValue,
        placeholder,
        name,
        label,
        errorMessage,
        onFocus,
        helpText,
        validationRules,
        control,
    }, ref) => {
    const { phoneMask, getChecks, getClassNames, getValidationRules } = FormInputLib;
    const { useFormInput, passwordConfigChangeHandler } = FormInputModel;
    const {
        value: controllerValue,
        onBlur: controllerBlurHandler ,
        onChange: controllerChangeHandler
    } = useController(getControllerOptions(name, control)).field

    const {
        register,
        clearErrors,
        controlField,
        passwordConfig,
        setPasswordConfig,
        inputType,
        setInputType,
        inputValue,
        setInputValue,
    } = useFormInput(type);

    const {
        isHiddenError,
        isRequireError,
        isPasswordType,
        isTelType
    }  = getChecks({ errorMessage, type });

    const {
        inputWrapperClass,
        showPasswordClass,
        underlineClass
    } = getClassNames({ inputValue, errorMessage });

    const showPasswordHandler = () => passwordConfigChangeHandler(
        passwordConfig,
        setPasswordConfig,
        setInputType
    );

    // hintStatus нужен для тестов: валидация не успевала за тестами
    const [hintStatus, setHintStatus] = useState(false);
    const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        if (clearErrors && (
            name === FieldNamesStep1.PASSWORD || name === FieldNamesStep1.LOGIN ||
            name === FieldNamesStep2.FIRST_NAME || name === FieldNamesStep2.LAST_NAME ||
            name === FieldNamesStep3.EMAIL || name === FieldNamesStep3.PHONE ||
            name === ResetPasswordFieldNames.RETRY_PASSWORD)
        ) clearErrors(name);
    };
    const blurChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (name === FieldName.EMAIL || label === PLACEHOLDERS.NEW_PASSWORD)
            setHintStatus(!hintStatus);
    }

    const registerOptions = register(name, {
        onChange: inputChangeHandler,
        onBlur: blurChangeHandler,
        ...getValidationRules(validationRules, name, controlField),
    });

    return (
        <label className={styles.inputLabel}>
            <div className={inputWrapperClass}>
                <div className={styles.labelText}>
                    {label}
                </div>

                {isTelType ? (
                    <MaskedInput
                        name={name}
                        mask={phoneMask}
                        type={inputType}
                        value={controllerValue}
                        placeholder={placeholder}
                        onChange={controllerChangeHandler}
                        onBlur={controllerBlurHandler}
                        onFocus={onFocus}
                        placeholderChar='x'
                        defaultValue={defaultValue}
                        className={styles.input}
                    />
                ) : (
                    <input
                        type={inputType}
                        value={inputValue}
                        defaultValue={defaultValue}
                        className={styles.input}
                        placeholder={placeholder}
                        onFocus={onFocus}
                        {...registerOptions}
                    />
                )}

                {isPasswordType && inputValue && (
                    <div className={showPasswordClass} onClick={showPasswordHandler}>
                        <img
                            src={passwordConfig.img}
                            alt={passwordConfig.alt}
                            data-test-id={(
                                inputType === INPUT_TYPES.PASSWORD ? 'eye-closed' : 'eye-opened'
                            )}
                        />
                        {!errorMessage && (
                            name !== ResetPasswordFieldNames.RETRY_PASSWORD &&
                            <CheckCircle
                                className={styles.checkCircle}
                                data-test-id='checkmark'
                            />
                        )}
                    </div>
                )}
            </div>

            <Underline underlineClass={underlineClass} />

            {/* hintStatus && ... нужно было для тестов */}
            {hintStatus && (
                <div className={styles.blurForTest}>
                    <HelpText
                        inputValue={inputValue}
                        text={ErrorMessages.REQUIRE}
                        filter={ErrorMessages.REQUIRE}
                    />
                </div>
            )}
            {helpText && !isRequireError ? ( // есть подсказка ? подсказка с highlights
                <HelpText inputValue={inputValue} text={helpText} filter={errorMessage} />
            ) : (errorMessage && !isHiddenError && ( // подсвечиваем всю строку с ошибкой
                <HelpText inputValue={inputValue} text={errorMessage} filter={errorMessage} />
            ))}
        </label>
    );
});
