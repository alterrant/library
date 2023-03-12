import { useState } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { hiddenPasswordConfig } from '../lib';
import { InputTypes } from '../../../shared/lib';

export const useFormInput = (type: InputTypes) => {
    const { register, clearErrors, setError } = useFormContext();
    const controlField: string = useWatch({ name: 'password' });

    const [passwordConfig, setPasswordConfig] = useState(hiddenPasswordConfig);
    const [inputType, setInputType] = useState(type);
    const [inputValue, setInputValue] = useState<string>('');

    return {
        register,
        clearErrors,
        controlField,
        passwordConfig,
        setPasswordConfig,
        inputType,
        setInputType,
        inputValue,
        setInputValue,
        setError
    };
};
