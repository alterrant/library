import { FormTypeStep, UserType } from "../types";
import { FieldNames } from "./fields-data";

export type StateTypes = {
    isLoading: boolean;
    isSuccess: boolean;
    errorMessage: string;
    user: UserType;
};

export type MeRequest = {
    identifier: string;
    password: string;
};

export type FormType = FormTypeStep<FieldNames>;
