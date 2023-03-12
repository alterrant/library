import { me } from '../slice';
import { signInConfig } from '../../lib';
import { DispatchAnyType } from '../../../../shared/lib';

type FormFieldsDataType = signInConfig.Types.FormType;
type SubmitHandlerType<
    T = FormFieldsDataType,
    D = DispatchAnyType
> = (formFieldsData: T, dispatch: D) => void;

export const submit: SubmitHandlerType = (formFieldsData, dispatch) => {
    dispatch(me(formFieldsData));
};
