import { Dispatch } from 'react';

import { registration } from '..';
import { FormTypeStep, signUpConfig } from '../../lib';
import { Types } from '../../lib/sign-up';
import { DispatchAnyType } from '../../../../shared/lib';

type SetSignUpStepType = Dispatch<Types.Step>;

type FormFieldsDataTypes = (
    FormTypeStep<signUpConfig.FieldNamesStep1> |
    FormTypeStep<signUpConfig.FieldNamesStep2> |
    FormTypeStep<signUpConfig.FieldNamesStep3>
);

type OnSubmitStepType<T extends FormFieldsDataTypes> = {
    formFieldsData: T;
    userInfo: Types.UserInfo;
    setUserInfo: Types.SetUserInfo;
    setStep: SetSignUpStepType;
    dispatch: DispatchAnyType;
    reset: () => void;
};

const { userInfoSetter } = signUpConfig;

type FormFieldsDataStep1Type = FormTypeStep<signUpConfig.FieldNamesStep1>;
const onSubmitStep1 = ({
    formFieldsData,
    userInfo,
    setUserInfo,
    setStep,
    reset
}: OnSubmitStepType<FormFieldsDataStep1Type>) => {
    userInfoSetter(
        formFieldsData as FormTypeStep<Types.StepsFieldNames>,
        userInfo,
        setUserInfo
    );

    setStep(1);
    reset();
};

type FormFieldsDataStep2Type = FormTypeStep<signUpConfig.FieldNamesStep2>;
const onSubmitStep2 = ({
    formFieldsData,
    userInfo,
    setUserInfo,
    setStep,
    reset
}: OnSubmitStepType<FormFieldsDataStep2Type>) => {
    userInfoSetter(
        formFieldsData as FormTypeStep<Types.StepsFieldNames>,
        userInfo,
        setUserInfo
    );

    setStep(2);
    reset();
};

type FormFieldsDataStep3Type = FormTypeStep<signUpConfig.FieldNamesStep3>;
const onSubmitStep3 = ({
    formFieldsData,
    userInfo,
    setUserInfo,
    dispatch,
    reset
}: OnSubmitStepType<FormFieldsDataStep3Type>) => {
    const addedUserInfo = userInfoSetter(
        formFieldsData as FormTypeStep<Types.StepsFieldNames>,
        userInfo,
        setUserInfo
    );

    reset();
    dispatch(registration(addedUserInfo));
};

type OnSubmitType = ({
    formFieldsData,
    userInfo,
    setUserInfo,
    setStep,
    dispatch,
    reset
}: OnSubmitStepType<FormTypeStep<Types.StepsFieldNames>>) => void;

export const submit: readonly [OnSubmitType, OnSubmitType, OnSubmitType] = [
    onSubmitStep1,
    onSubmitStep2,
    onSubmitStep3,
];
