import { DispatchAnyType } from 'shared/lib';
import { AuthModel } from '../..';

export const tryAgain = (dispatch: DispatchAnyType) => {
  dispatch(AuthModel.resetState());
};
