import { Dispatch } from 'react';

import { INPUT_TYPES, InputTypes } from 'shared/lib';
import { hiddenPasswordConfig, PasswordConfigTypes, visiblePasswordConfig } from '../lib';

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
