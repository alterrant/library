import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { UserModel } from 'entities/user';
import { useAppDispatch, useAppSelector } from 'shared/lib';
import { ChangeUserInfoTypes } from '../../lib/types';
import { changeUserInfo } from '../../lib/configs';

export const useProfileForm = () => {
  type ProfileFieldNamesType = ChangeUserInfoTypes.ProfileFieldNamesType;

  const methods = useForm<ProfileFieldNamesType>({ mode: 'onBlur', reValidateMode: 'onBlur' });
  const dispatch = useAppDispatch();

  const { user: currentUserId } = useAppSelector(UserModel.userSelector);

  type FormStatusType = ChangeUserInfoTypes.FormStatusType;
  const [formStatus, setFormStatus] = useState<FormStatusType>(changeUserInfo.InitialFormStatus);

  const initialProfileFields: ProfileFieldNamesType = {
    login: currentUserId.username,
    firstName: currentUserId.firstName,
    lastName: currentUserId.lastName,
    email: currentUserId.email,
    phone: currentUserId.phone,
    password: '',
  };

  useEffect(() => {
    if (currentUserId) {
      methods.reset(initialProfileFields);
    }
  }, [currentUserId]);

  return {
    methods,
    dispatch,
    initialProfileFields,
    formStatus,
    setFormStatus,
  };
};
