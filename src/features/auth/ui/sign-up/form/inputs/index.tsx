import { Control, FieldErrors } from 'react-hook-form';

import { FormInput } from 'entities/form-input';
import { signUpConfig } from '../../../../lib';
import { Types } from '../../../../lib/sign-up';

type InputsProps = {
  dataFields: Types.DatumFieldsTypes;
  step: Types.Step;
  control: Control<signUpConfig.Types.FormType>;
  errors: FieldErrors<signUpConfig.Types.FormType>;
};

export const FormInputs = ({ dataFields, step, control, errors }: InputsProps) => (
  <>
    {dataFields[step].map((fieldData) => (
      <FormInput
        {...fieldData}
        control={control}
        errorMessage={errors[fieldData.name]?.message}
        key={fieldData.name}
      />
    ))}
  </>
);
