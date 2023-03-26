import { DispatchAnyType } from 'shared/lib';
import { authorisation } from '../slice';
import { signInConfig } from '../../lib';

type FormFieldsDataType = signInConfig.Types.FormType;
type SubmitHandlerType<T = FormFieldsDataType, D = DispatchAnyType> = (
  formFieldsData: T,
  dispatch: D
) => void;

export const submit: SubmitHandlerType = (formFieldsData, dispatch) => {
  dispatch(authorisation(formFieldsData));
};
