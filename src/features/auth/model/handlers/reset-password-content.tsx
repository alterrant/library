import { NavigateFunction } from 'react-router-dom';

import { DispatchAnyType } from 'shared/lib';
import { AuthModel } from '../..';

export const goToSignIn = (dispatch: DispatchAnyType, navigate: NavigateFunction) => {
  dispatch(AuthModel.resetState());

  navigate('../auth');
};

export const tryAgain = (dispatch: DispatchAnyType) => {
  dispatch(AuthModel.resetState());
};
