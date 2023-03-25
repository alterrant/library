import { UserStateType } from '../lib';

export const userSelector = (state: RootState): UserStateType => state.user;

export const userIdSelector = (state: RootState): number => state.user.user.id;
