import { NavigateFunction } from 'react-router-dom';

import { AuthLib, AuthModel } from '../..';
import { DispatchAnyType } from '../../../../shared/lib';

type UserInfoType = AuthLib.signUpConfig.Types.UserInfo;
type SetUserInfoType = AuthLib.signUpConfig.Types.SetUserInfo;

export const goToSignIn = (
  setUserInfo: SetUserInfoType,
  dispatch: DispatchAnyType,
  navigate: NavigateFunction
) => {
  setUserInfo({} as UserInfoType);
  dispatch(AuthModel.resetState());

  navigate('../auth');
};

type SetStepType = AuthLib.signUpConfig.Types.SetStep;

export const tryAgain = (
  setStep: SetStepType,
  setUserInfo: SetUserInfoType,
  dispatch: DispatchAnyType
) => {
  setStep(AuthLib.signUpConfig.INITIAL_STEP);
  setUserInfo({} as UserInfoType);

  dispatch(AuthModel.resetState());
};

export const retryRequest = (userInfo: UserInfoType, dispatch: DispatchAnyType) => {
  dispatch(AuthModel.registration(userInfo));
};
