import React, { ChangeEvent } from 'react';
import MaskedInput from 'react-text-mask';
import { Control, useController } from 'react-hook-form';
import classNames from 'classnames';

import { signUpConfig } from 'features/auth/lib';
import { ChangeUserInfoTypes } from 'features/profile/lib/types';
import { getControllerOptions } from 'features/auth/lib/sign-up';
import { CheckCircle, Underline } from 'shared/ui';
import {
  InputTypes,
  ResetPasswordFieldNames,
  ValidationRulesTypes,
} from 'shared/lib';
import { HelpText } from './help-text';
import { FormInputLib, FormInputModel } from '..';

import styles from './form-input.module.css';

type InputProps = {
  type: InputTypes;
  placeholder: string;
  name: string;
  label: string;
  onFocus?: () => void;
  onChange?: () => void;
  defaultValue?: string | number;
  errorMessage?: string;
  isDirtyField?: boolean;
  isDisabled?: boolean;
  helpText?: string;
  control?: Control<signUpConfig.Types.FormType> | Control<ChangeUserInfoTypes.ProfileFieldNamesType>;
  validationRules?: ValidationRulesTypes;
  ref: HTMLInputElement;
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
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
      isDisabled = false,
    },
    ref
  ) => {
    const { phoneMask, getChecks, getClassNames, getValidationRules } = FormInputLib;
    const { useFormInput, passwordConfigChangeHandler } = FormInputModel;
    const {
      value: controllerValue,
      onBlur: controllerBlurHandler,
      onChange: controllerChangeHandler,
    } = useController(getControllerOptions(name, control)).field;

    const {
      register,
      clearErrors,
      controlField,
      passwordConfig,
      setPasswordConfig,
      inputType,
      setInputType,
      getValues,
      setValue,
    } = useFormInput(type);

    const inputValue = getValues(name);

    const { isHiddenError, isRequireError, isPasswordType, isTelType } = getChecks({
      errorMessage,
      type,
    });

    const { inputWrapperClass, showPasswordClass, underlineClass } = getClassNames({
      inputValue,
      errorMessage,
    });

    const showPasswordHandler = () => passwordConfigChangeHandler(passwordConfig, setPasswordConfig, setInputType);

    const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(name, e.target.value);

      clearErrors(name);
    };

    const registerOptions = register(name, {
      onChange: inputChangeHandler,
      ...getValidationRules(validationRules, name, controlField),
    });

    return (
      <>
        <label className={classNames(styles.inputLabel)}>
          <div className={inputWrapperClass}>
            <div className={styles.labelText}>{label}</div>

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
                disabled={isDisabled}
              />
            ) : (
              <input
                type={inputType}
                defaultValue={defaultValue}
                className={styles.input}
                placeholder={placeholder}
                onFocus={onFocus}
                disabled={isDisabled}
                 {...registerOptions}
              />
            )}

            {isPasswordType && inputValue && (
              <div className={showPasswordClass} onClick={showPasswordHandler}>
                <img
                  src={passwordConfig.img}
                  alt={passwordConfig.alt}
                />
                {!errorMessage && name !== ResetPasswordFieldNames.RETRY_PASSWORD && (
                  <CheckCircle className={styles.checkCircle} />
                )}
              </div>
            )}
          </div>

          <Underline underlineClass={underlineClass} />

          {helpText && !isRequireError ? ( // есть подсказка ? подсказка с highlights
            <HelpText inputValue={inputValue} text={helpText} filter={errorMessage} />
          ) : (
            errorMessage &&
            !isHiddenError && ( // подсвечиваем всю строку с ошибкой
              <HelpText inputValue={inputValue} text={errorMessage} filter={errorMessage} />
            )
          )}
        </label>
      </>
    );
  }
);
