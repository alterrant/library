import { Dispatch } from 'react';

import { ErrorMessages, INPUT_TYPES, InputTypes, PLACEHOLDERS, validators } from 'shared/lib';
import { hiddenPasswordConfig, PasswordConfigTypes, visiblePasswordConfig } from '../lib';
import { FieldName } from '../../../features/auth/lib/forgot-password';

export const passwordConfigChangeHandler = (
  passwordConfig: PasswordConfigTypes,
  setPasswordConfig: Dispatch<PasswordConfigTypes>,
  setInputType: Dispatch<InputTypes>
) => {
  if (passwordConfig.type === INPUT_TYPES.PASSWORD) {
    setPasswordConfig(visiblePasswordConfig);
    setInputType(INPUT_TYPES.TEXT);
  } else {
    setPasswordConfig(hiddenPasswordConfig);
    setInputType(INPUT_TYPES.PASSWORD);
  }
};

export const clickHandler = (
  inputValue: string,
  name: string,
  pathname: string,
  setHintStatus: Dispatch<{ isVisible: boolean; error: string }>
) => {
  if (pathname === '/profile') {
    if (name === FieldName.EMAIL) {
      if (!inputValue) {
        setHintStatus({ isVisible: true, error: ErrorMessages.REQUIRE });
      } else if (validators.emailValidator(inputValue))
        setHintStatus({ isVisible: true, error: ErrorMessages.INVALID_EMAIL });
    }
  }
};
