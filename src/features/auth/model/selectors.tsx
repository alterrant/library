import { Types } from '../lib/sign-in';

export const authSelector = (state: RootState): Types.StateTypes => state.auth;
