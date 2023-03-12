import { AuthModel } from '../..';
import { DispatchAnyType } from '../../../../shared/lib';

export const tryAgain = (dispatch: DispatchAnyType) => {
    dispatch(AuthModel.resetState());
};
