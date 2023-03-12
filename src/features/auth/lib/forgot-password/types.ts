import { FieldName } from "./fields-data";
import { FormTypeStep } from "../types";

export type FormType = FormTypeStep<FieldName>;

export type ForgotPasswordRequest = {
    email: string;
};
