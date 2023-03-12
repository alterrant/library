import { Auth, AuthModel } from "../../../features/auth";
import { Preloader } from "../../../shared/ui";

export const Content = () => {
    const {
        step,
        setStep,
        userInfo,
        setUserInfo,
        isSuccess,
        errorMessage,
        navigate,
        isLoading
    } = AuthModel.useSignUpContent();

    if (isSuccess) return (
        <Auth.SignUp.SuccessContent setUserInfo={setUserInfo} navigate={navigate} />
    );
    if (errorMessage) return (
        <Auth.SignUp.ErrorContent
            errorMessage={errorMessage}
            setStep={setStep}
            userInfo={userInfo}
            setUserInfo={setUserInfo}
        />
    );

    return (
        <>
            {isLoading && <Preloader/>}
            <Auth.SignUp.Form
                setUserInfo={setUserInfo}
                userInfo={userInfo}
                step={step}
                setStep={setStep}
            />
        </>
    );
};
