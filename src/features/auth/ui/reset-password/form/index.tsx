import { FormProvider } from 'react-hook-form';

import { AuthLib, AuthModel } from 'features/auth';
import { FormInput } from 'entities/form-input';
import { Templates } from 'shared/ui';

type FormProps = {
  code: string;
};

export const Form = ({ code }: FormProps) => {
  const { useResetPassForm, handlers } = AuthModel;
  const { resetPassSubmit } = handlers;

  const { TITLE, SUBMIT_TEXT, FOOTER_TEXT, dataFields } = AuthLib.resetPassConfig;

  const { methods, dispatch } = useResetPassForm();

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  type FormFieldsDataType = AuthLib.resetPassConfig.Types.FormType;
  const onSubmit = (formFieldsData: FormFieldsDataType) => {
    resetPassSubmit(formFieldsData, code, dispatch);
  };

  return (
    <FormProvider {...methods}>
      <Templates.Auth.FormTemplate
        handleSubmit={handleSubmit(onSubmit)}
        title={TITLE}
        inputs={dataFields.map((fieldData) => (
          <FormInput
            {...fieldData}
            errorMessage={errors[fieldData.name]?.message}
            key={fieldData.name}
          />
        ))}
        isSubmitDisabled={!!errors.passwordConfirmation}
        submitText={SUBMIT_TEXT}
        footerText={FOOTER_TEXT}
        dataTestId='reset-password-form'
      />
    </FormProvider>
  );
};
