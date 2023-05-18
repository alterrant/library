import { FormProvider } from 'react-hook-form';

import { FormInput } from 'entities/form-input';
import { Templates } from 'shared/ui';
import { checkIsEmptyObject, ErrorMessages } from 'shared/lib';
import { RestoreAccount } from './restore-account';
import { AuthModel, AuthLib } from '../../..';

type FormType = {
  isInvalidAuthorisation: boolean;
};

export const Form = ({ isInvalidAuthorisation }: FormType) => {
  const { useSignInForm, handlers, resetState } = AuthModel;
  const { signInSubmit } = handlers;

  const { TITLE, SUBMIT_TEXT, REGISTRATION_INFO, formFooterConfig, fieldsData } = AuthLib.signInConfig;

  const { methods, dispatch } = useSignInForm();

  const {
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = methods;

  type FormFieldsDataType = AuthLib.signInConfig.Types.FormType;
  const onSubmit = (formFieldsData: FormFieldsDataType) => {
    signInSubmit(formFieldsData, dispatch);
  };

  const onChangeHandler = () => {
    const submitError = ErrorMessages.HIDDEN_ERROR;

    if (Object.values(errors as Record<string, string>).includes(submitError)) clearErrors();
  };

  const resetStateHandler = () => dispatch(resetState());

  return (
    <FormProvider {...methods}>
      <Templates.Auth.FormTemplate
        handleSubmit={handleSubmit(onSubmit)}
        title={TITLE}
        inputs={fieldsData.map((fieldData) => (
          <FormInput
            {...fieldData}
            onChange={onChangeHandler}
            errorMessage={errors[fieldData.name]?.message}
            key={fieldData.name}
          />
        ))}
        inputHelper={<RestoreAccount linkHandler={resetStateHandler} isError={isInvalidAuthorisation} />}
        isSubmitDisabled={!checkIsEmptyObject(errors)}
        submitText={SUBMIT_TEXT}
        linkHandler={resetStateHandler}
        footerText={REGISTRATION_INFO}
        footerLinkedTextConfig={formFooterConfig}
      />
    </FormProvider>
  );
};
