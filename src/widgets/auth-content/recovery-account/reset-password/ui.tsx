import { Auth, AuthModel } from '../../../../features/auth';
import { Preloader } from '../../../../shared/ui';

export const Content = ({code}: {code: string}) => {
    const {
        errorMessage,
        isSuccess,
        dispatch,
        navigate,
        isLoading
    } = AuthModel.useResetPassContent();

    if (isSuccess) return <Auth.ResetPass.SuccessContent dispatch={dispatch} navigate={navigate} />;
    if (errorMessage) return <Auth.ResetPass.ErrorContent dispatch={dispatch} />;

    return (
        <>
            {isLoading && <Preloader />}
            <Auth.ResetPass.Form code={code} />
        </>
    );
};
