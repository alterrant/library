import { Types } from './sign-in';
import { UserType } from './types';

export const initialState: Types.StateTypes = {
    isLoading: false,
    isSuccess: false,
    errorMessage: '',
    user: {} as UserType,
};
