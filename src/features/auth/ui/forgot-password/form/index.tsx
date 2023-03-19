import { FormProvider } from 'react-hook-form';

import { InputDescription } from './input-description';
import { AuthLib, AuthModel } from '../../..';
import { Templates } from '../../../../../shared/ui';
import { FormInput } from '../../../../../entities/form-input';
import { ErrorMessages } from '../../../../../shared/lib';

export const Form = () => {
  const { useForgotPassForm, handlers } = AuthModel;
  const { forgotPassSubmit } = handlers;

  const { TITLE, SUBMIT_TEXT, REGISTRATION_INFO, formFooterConfig, fieldData } =
    AuthLib.forgotPassConfig;

  const { methods, dispatch } = useForgotPassForm();

  const {
    handleSubmit,
    formState: { errors, isValid, touchedFields },
  } = methods;

  type FormFieldsDataType = AuthLib.forgotPassConfig.Types.FormType;
  const onSubmit = (formFieldsData: FormFieldsDataType) => {
    forgotPassSubmit(formFieldsData, dispatch);
  };

  return (
    <FormProvider {...methods}>
      <Templates.Auth.FormTemplate
        handleSubmit={handleSubmit(onSubmit)}
        title={TITLE}
        inputs={
          <FormInput
            {...fieldData}
            errorMessage={
              errors[fieldData.name]?.message &&
              errors[fieldData.name]?.message === ErrorMessages.REQUIRE
                ? ErrorMessages.REQUIRE
                : errors[fieldData.name]?.message
            }
            key={fieldData.name}
          />
        }
        isSubmitDisabled={touchedFields && !isValid}
        inputHelper={<InputDescription />}
        submitText={SUBMIT_TEXT}
        footerText={REGISTRATION_INFO}
        footerLinkedTextConfig={formFooterConfig}
        dataTestId='send-email-form'
      />
    </FormProvider>
  );
};
