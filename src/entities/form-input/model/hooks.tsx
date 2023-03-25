import { useState } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { hiddenPasswordConfig } from '../lib';
import { InputTypes } from '../../../shared/lib';

export const useFormInput = (type: InputTypes) => {
  const { register, clearErrors, setError, setValue, getValues, resetField } = useFormContext();
  const controlField: string = useWatch({ name: 'password' });

  const [passwordConfig, setPasswordConfig] = useState(hiddenPasswordConfig);
  const [inputType, setInputType] = useState(type);

  return {
    register,
    clearErrors,
    setError,
    setValue,
    getValues,
    resetField,
    controlField,
    passwordConfig,
    setPasswordConfig,
    inputType,
    setInputType,
  };
};
