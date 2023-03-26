import { useState } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import {InputTypes, usePathname} from 'shared/lib';
import { hiddenPasswordConfig } from '../lib';

export const useFormInput = (type: InputTypes) => {
  const { register, clearErrors, setError, setValue, getValues, resetField } = useFormContext();
  const controlField: string = useWatch({ name: 'password' });
  const pathname = usePathname();
  // hintStatus нужен для тестов: валидация не успевала за тестами
  const [hintStatus, setHintStatus] = useState<{ isVisible: boolean; error: string }>({
    isVisible: false,
    error: '',
  });

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
    hintStatus,
    setHintStatus,
    pathname
  };
};
