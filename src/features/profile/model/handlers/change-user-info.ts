import { UseFormReset } from 'react-hook-form';
import { Dispatch } from 'react';

import { DispatchAnyType } from 'shared/lib';
import { changeUserInfo } from '../slice';
import { configs } from '../../lib';
import { ChangeUserInfoTypes } from '../../lib/types';
import {ChangeUserInfoRequest} from "../../lib/types/change-user-info";

export const changeFormStatusHandler = (
  formStatus: ChangeUserInfoTypes.FormStatusType,
  setFormStatus: ChangeUserInfoTypes.SetFormStatusType,
  reset: UseFormReset<ChangeUserInfoTypes.ProfileFieldNamesType>,
  initialProfileFields: ChangeUserInfoTypes.ProfileFieldNamesType
) => {
  if (formStatus.isChangeable) reset(initialProfileFields);

  setFormStatus({ isChangeable: !formStatus.isChangeable });
};

export const changeProfileInfo = (
  formFieldsData: ChangeUserInfoTypes.ProfileFieldNamesType,
  dispatch: DispatchAnyType,
  setFormStatus: Dispatch<ChangeUserInfoTypes.FormStatusType>
) => {
  const { InitialFormStatus } = configs.changeUserInfo;
  const changeUserInfoPayload: ChangeUserInfoRequest = {
    username: formFieldsData.login,
    password: formFieldsData.password,
    firstName: formFieldsData.firstName,
    lastName: formFieldsData.lastName,
    email: formFieldsData.email,
    phone: formFieldsData.phone
  };


  dispatch(changeUserInfo(changeUserInfoPayload));

  setFormStatus(InitialFormStatus);
};
