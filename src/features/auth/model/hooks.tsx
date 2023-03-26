import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { ErrorMessages, useAppDispatch, useAppSelector } from 'shared/lib';
import { AuthModel, AuthLib } from '..';

export const useSignInForm = () => {
  type FormType = AuthLib.signInConfig.Types.FormType;

  const methods = useForm<FormType>({ mode: 'onTouched', reValidateMode: 'onChange' });
  const dispatch = useAppDispatch();
  const hiddenMessage = ErrorMessages.HIDDEN_ERROR;

  const { authSelector } = AuthModel;
  const { FieldNames } = AuthLib.signInConfig;
  const { errorMessage } = useAppSelector(authSelector);

  useEffect(() => {
    if (errorMessage) {
      methods.setError(FieldNames.LOGIN, { message: hiddenMessage });
      methods.setError(FieldNames.PASSWORD, { message: hiddenMessage });
    }
  }, [errorMessage]);

  return {
    methods,
    dispatch,
  };
};

export const useSignUpForm = () => {
  type FormType = AuthLib.signUpConfig.Types.FormType;

  const methods = useForm<FormType>({ mode: 'onBlur', reValidateMode: 'onBlur' });
  const dispatch = useAppDispatch();

  return {
    methods,
    dispatch,
  };
};

export const useForgotPassForm = () => {
  type FormType = AuthLib.forgotPassConfig.Types.FormType;

  const methods = useForm<FormType>({ mode: 'all', reValidateMode: 'onBlur' });
  const dispatch = useAppDispatch();

  const { authSelector } = AuthModel;
  const { errorMessage } = useAppSelector(authSelector);
  const { FieldName } = AuthLib.forgotPassConfig;

  useEffect(() => {
    if (errorMessage) {
      methods.setError(FieldName.EMAIL, { message: 'error' });
    }
  }, [errorMessage]);

  return {
    methods,
    dispatch,
  };
};

export const useResetPassForm = () => {
  type FormType = AuthLib.resetPassConfig.Types.FormType;

  const methods = useForm<FormType>({ mode: 'onBlur', reValidateMode: 'onBlur' });
  const dispatch = useAppDispatch();

  return {
    methods,
    dispatch,
  };
};

export const useSignInContent = () => {
  const { authSelector } = AuthModel;
  const { errorMessage, isLoading } = useAppSelector(authSelector);

  return { errorMessage, isLoading };
};

export const useSignUpContent = () => {
  const navigate = useNavigate();

  const { INITIAL_STEP } = AuthLib.signUpConfig;
  const { authSelector } = AuthModel;

  type StepType = AuthLib.signUpConfig.Types.Step;
  const [step, setStep] = useState<StepType>(INITIAL_STEP);

  type UserInfoType = AuthLib.signUpConfig.Types.UserInfo;
  const [userInfo, setUserInfo] = useState<UserInfoType>({} as UserInfoType);

  const { isSuccess, errorMessage, isLoading } = useAppSelector(authSelector);

  return {
    step,
    setStep,
    userInfo,
    setUserInfo,
    navigate,
    isSuccess,
    errorMessage,
    isLoading,
  };
};

export const useForgotPassContent = () => {
  const dispatch = useAppDispatch();
  const { authSelector, resetState } = AuthModel;
  const { isSuccess, isLoading } = useAppSelector(authSelector);

  return { isSuccess, resetState, dispatch, isLoading };
};

export const useResetPassContent = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { authSelector } = AuthModel;
  const { isSuccess, errorMessage, isLoading } = useAppSelector(authSelector);

  return { isSuccess, errorMessage, dispatch, navigate, isLoading };
};
