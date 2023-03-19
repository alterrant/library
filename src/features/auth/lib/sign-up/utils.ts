import { Control } from 'react-hook-form';

import { Types } from '.';
import { FormTypeStep } from '../types';
import { ErrorMessages } from '../../../../shared/lib';

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

// TODO: name: Types.FieldNameStepsTypes - refactor
export const getControllerOptions = (name: string, control: Control<any, any> | undefined) => ({
  name,
  control,
  rules: { required: true },
});

export const checkUserExistMessage = (errorMessage: string) =>
  errorMessage === ErrorMessages.USER_EXIST;
