import { resetPassAttempt } from '../slice';
import { resetPassConfig } from '../../lib';
import { DispatchAnyType } from '../../../../shared/lib';

type FormFieldsDataType = resetPassConfig.Types.FormType;
type SubmitHandlerType<T = FormFieldsDataType, C = string, D = DispatchAnyType> = (
  formFieldsData: T,
  code: C,
  dispatch: D
) => void;

export const submit: SubmitHandlerType = (
  formFieldsData,
  code,
  dispatch
) => {
  const formattedData = { ...formFieldsData, code };

  dispatch(resetPassAttempt(formattedData));
};
