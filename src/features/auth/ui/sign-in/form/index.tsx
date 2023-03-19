import { FormProvider } from 'react-hook-form';

import { RestoreAccount } from './restore-account';
import { AuthModel, AuthLib } from '../../..';
import { Templates } from '../../../../../shared/ui';
import { FormInput } from '../../../../../entities/form-input';
import { checkObjectEmpty } from '../../../../../shared/lib';

type FormType = {
  isInvalidAuthorisation: boolean;
};

export const Form = ({ isInvalidAuthorisation }: FormType) => {
  const { useSignInForm, handlers } = AuthModel;
  const { signInSubmit } = handlers;

  const { TITLE, SUBMIT_TEXT, REGISTRATION_INFO, formFooterConfig, fieldsData } =
    AuthLib.signInConfig;

  const { methods, dispatch } = useSignInForm();

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  type FormFieldsDataType = AuthLib.signInConfig.Types.FormType;
  const onSubmit = (formFieldsData: FormFieldsDataType) => {
    signInSubmit(formFieldsData, dispatch);
  };

  return (
    <FormProvider {...methods}>
      <Templates.Auth.FormTemplate
        handleSubmit={handleSubmit(onSubmit)}
        title={TITLE}
        inputs={fieldsData.map((fieldData) => (
          <FormInput
            {...fieldData}
            errorMessage={errors[fieldData.name]?.message}
            key={fieldData.name}
          />
        ))}
        inputHelper={<RestoreAccount isError={isInvalidAuthorisation} />}
        isSubmitDisabled={!checkObjectEmpty(errors)}
        submitText={SUBMIT_TEXT}
        footerText={REGISTRATION_INFO}
        footerLinkedTextConfig={formFooterConfig}
        dataTestId='auth-form'
      />
    </FormProvider>
  );
};
