import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
    initialState,
    UserType,
    signInConfig,
    signUpConfig,
    forgotPassConfig,
    resetPassConfig,
} from '../lib';

type MePayloadType = PayloadAction<signInConfig.Types.MeRequest>;
type RegistrationPayloadType = PayloadAction<signUpConfig.Types.RegistrationRequest>;
type ForgotPassAttemptPayloadType = PayloadAction<forgotPassConfig.Types.ForgotPasswordRequest>;
type ResetPassAttemptPayloadType = PayloadAction<resetPassConfig.Types.ResetPassRequest>;
type SetUserPayloadType = PayloadAction<UserType>;
type SetErrorPayloadType = PayloadAction<string>;

const slice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setSuccess: (state) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.errorMessage = '';
        },
        me: (state, action: MePayloadType) => {
            state.isLoading = true;
            state.isSuccess = false;
            state.errorMessage = '';
            state.user = {} as UserType;
        },
        registration: (state, action: RegistrationPayloadType) => {
            state.isLoading = true;
            state.isSuccess = false;
            state.errorMessage = '';
            state.user = {} as UserType;
        },
        forgotPassAttempt: (state, action: ForgotPassAttemptPayloadType) => {
            state.isLoading = true;
            state.isSuccess = false;
            state.errorMessage = '';
            state.user = {} as UserType;
        },
        resetPassAttempt: (state, action: ResetPassAttemptPayloadType) => {
            state.isLoading = true;
            state.isSuccess = false;
            state.errorMessage = '';
            state.user = {} as UserType;
        },
        setUser: (state, action: SetUserPayloadType) => {
            state.isLoading = false;
            state.user = action.payload;
        },
        setError: (state, action: SetErrorPayloadType) => {
            state.isLoading = false;
            state.errorMessage = action.payload;
        },
        resetState: (state) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.errorMessage = '';
            state.user = {} as UserType;
        },
    }
});

export const {
    setSuccess,
    me,
    registration,
    forgotPassAttempt,
    resetPassAttempt,
    setUser,
    setError,
    resetState
} = slice.actions;
export const { reducer } = slice;
