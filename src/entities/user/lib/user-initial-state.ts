import { UserStateType, UserType } from './types';

export const initialState: UserStateType = {
  isLoading: false,
  success: '',
  error: '',
  user: {} as UserType,
};
