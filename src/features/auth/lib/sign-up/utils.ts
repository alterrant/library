import { Control } from 'react-hook-form';

import { ErrorMessages } from 'shared/lib';
import { Types } from '.';
import { FormTypeStep } from '../types';

export const getSubtitle = (step: number) => `${step + 1} шаг из 3`;

const getAddedUserInfo = (
  formFieldsData: FormTypeStep<Types.StepsFieldNames>,
  userInfo: Types.UserInfo
) => ({ ...formFieldsData, ...userInfo });

export const userInfoSetter = (
  formFieldsData: FormTypeStep<Types.StepsFieldNames>,
  userInfo: Types.UserInfo,
  setUserInfo: Types.SetUserInfo
) => {
  const addedUserInfo = getAddedUserInfo(formFieldsData, userInfo);
  setUserInfo(addedUserInfo);

  return addedUserInfo;
};

export const getControllerOptions = (name: string, control: Control<any, any> | undefined) => ({
  name,
  control,
  rules: { required: true },
});

export const checkUserExistMessage = (errorMessage: string) =>
  errorMessage === ErrorMessages.USER_EXIST;
