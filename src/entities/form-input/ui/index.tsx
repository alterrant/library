import React, { ChangeEvent, Dispatch } from 'react';
import MaskedInput from 'react-text-mask';
import { Control, useController } from 'react-hook-form';
import classNames from 'classnames';

import { signUpConfig } from 'features/auth/lib';
import { FieldName } from 'features/auth/lib/forgot-password';
import { ChangeUserInfoTypes } from 'features/profile/lib/types';
import { getControllerOptions } from 'features/auth/lib/sign-up';
import { CheckCircle, Underline } from 'shared/ui';
import {
  ErrorMessages,
  INPUT_TYPES,
  InputTypes,
  ResetPasswordFieldNames,
  ValidationRulesTypes,
  PLACEHOLDERS,
  validators,
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
    const { useFormInput, passwordConfigChangeHandler, clickHandler } = FormInputModel;
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
      hintStatus,
      setHintStatus,
    } = useFormInput(type);

    const { isHiddenError, isRequireError, isPasswordType, isTelType } = getChecks({
      errorMessage,
      type,
    });

    const inputValue = getValues(name);

    const { inputWrapperClass, showPasswordClass, underlineClass } = getClassNames({
      inputValue,
      errorMessage,
    });

    const showPasswordHandler = () => passwordConfigChangeHandler(passwordConfig, setPasswordConfig, setInputType);

    const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(name, e.target.value);
      /* setHintStatus({ isVisible: false, error: '' }); */

      clearErrors(name);
    };

    // ошибку на onBlur прокидываю вручную, тк тесты не успевают иногда обработать onBlur
    const blurChangeHandler = () => {
      if (name === FieldName.EMAIL || label === PLACEHOLDERS.NEW_PASSWORD) {
        if (!inputValue) {
          setHintStatus({ isVisible: true, error: ErrorMessages.REQUIRE });
        } else if (validators.emailValidator(inputValue))
          setHintStatus({ isVisible: true, error: ErrorMessages.INVALID_EMAIL });
      }
    };

    const onClick = () => clickHandler(inputValue, name, setHintStatus);

    const registerOptions = register(name, {
      onChange: inputChangeHandler,
      onBlur: blurChangeHandler,
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
                onClick={onClick}
                disabled={isDisabled}
                {...registerOptions}
              />
            )}

            {isPasswordType && inputValue && (
              <div className={showPasswordClass} onClick={showPasswordHandler}>
                <img
                  src={passwordConfig.img}
                  alt={passwordConfig.alt}
                  data-test-id={inputType === INPUT_TYPES.PASSWORD ? 'eye-closed' : 'eye-opened'}
                />
                {!errorMessage && name !== ResetPasswordFieldNames.RETRY_PASSWORD && (
                  <CheckCircle className={styles.checkCircle} data-test-id='checkmark' />
                )}
              </div>
            )}
          </div>

          <Underline underlineClass={underlineClass} />

          <div className={styles.hidden}>
            {!hintStatus.isVisible && helpText && !isRequireError ? ( // есть подсказка ? подсказка с highlights
              <HelpText inputValue={inputValue} text={helpText} filter={errorMessage} />
            ) : (
              errorMessage &&
              !isHiddenError && ( // подсвечиваем всю строку с ошибкой
                <HelpText inputValue={inputValue} text={errorMessage} filter={errorMessage} />
              )
            )}
          </div>
          {/* hintStatus && ... вручную прокидываю ошибку ан onBlur - нужно для тестов */}
          {hintStatus.isVisible && (
            <HelpText inputValue={inputValue} text={hintStatus.error} filter={hintStatus.error} />
          )}
        </label>
      </>
    );
  }
);
