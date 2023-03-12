import { FormProvider } from 'react-hook-form';

import { useSignUpForm, handlers } from '../../../model';
import { signUpConfig } from '../../../lib';
import { Types } from '../../../lib/sign-up';
import { Templates } from '../../../../../shared/ui';
import { FormInputs } from './inputs';

type FormProps = {
    step: Types.Step;
    setStep: Types.SetStep;
    userInfo: Types.UserInfo;
    setUserInfo: Types.SetUserInfo;
};

export const Form = ({ step, setStep, userInfo, setUserInfo }: FormProps) => {
    const { methods, dispatch } = useSignUpForm();
    const {
        SUBMIT_TEXT,
        TITLE,
        REGISTRATION_INFO,
        formFooterConfig,
        dataFields,
        getSubtitle
    } = signUpConfig;

    const {
        control,
        handleSubmit,
        formState: { errors, isValid },
        reset,
    } = methods;

    const subtitle = getSubtitle(step);

    const onSubmit = (formFieldsData: Types.FormType) => {
        handlers.signUpSubmit[step]({
            formFieldsData, userInfo, setUserInfo, setStep, dispatch, reset
        });
    };

    return (
        <FormProvider {...methods}>
            <Templates.Auth.FormTemplate
                handleSubmit={handleSubmit(onSubmit)}
                title={TITLE}
                subtitle={subtitle}
                inputs={(
                    <FormInputs
                        errors={errors}
                        control={control}
                        dataFields={dataFields}
                        step={step}
                    />
                )}
                isSubmitDisabled={!isValid}
                submitText={SUBMIT_TEXT[step]}
                footerText={REGISTRATION_INFO}
                footerLinkedTextConfig={formFooterConfig}
                dataTestId='register-form'
            />
        </FormProvider>
    );
};
