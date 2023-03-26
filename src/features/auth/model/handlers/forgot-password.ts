import { DispatchAnyType } from 'shared/lib';
import { forgotPassAttempt } from '../slice';
import { forgotPassConfig } from '../../lib';

type FormFieldsDataType = forgotPassConfig.Types.FormType;
type SubmitHandlerType<T = FormFieldsDataType, D = DispatchAnyType> = (
  dispatch: T,
  formFieldsData: D
) => void;

export const submit: SubmitHandlerType = (formFieldsData, dispatch) => {
  dispatch(forgotPassAttempt(formFieldsData));
};
