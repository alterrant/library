import { Auth, AuthModel } from "../../../../features/auth";
import {Preloader} from "../../../../shared/ui";

export const Content = () => {
    const { isSuccess, isLoading } = AuthModel.useForgotPassContent();

    if (isSuccess) return <Auth.ForgotPass.SuccessContent />

    return (
        <>
            {isLoading && <Preloader/>}
            <Auth.ForgotPass.Form />
        </>
    );
};
