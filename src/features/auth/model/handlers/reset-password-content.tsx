import { NavigateFunction } from 'react-router-dom';

import { AuthModel } from '../..';
import { DispatchAnyType } from '../../../../shared/lib';

export const goToSignIn = (dispatch: DispatchAnyType, navigate: NavigateFunction) => {
  dispatch(AuthModel.resetState());

  navigate('../auth');
};

export const tryAgain = (dispatch: DispatchAnyType) => {
  dispatch(AuthModel.resetState());
};
