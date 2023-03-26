import { Auth, AuthModel, AuthLib } from 'features/auth';
import { Preloader } from 'shared/ui';

export const Content = () => {
  const { checkInvalidAuthorisationMessage } = AuthLib.signInConfig;
  const { errorMessage, isLoading } = AuthModel.useSignInContent();
  const isInvalidAuthorisation = checkInvalidAuthorisationMessage(errorMessage);

  if (errorMessage && !isInvalidAuthorisation) return <Auth.SignIn.ErrorContent />;

  return (
    <>
      {isLoading && <Preloader />}
      <Auth.SignIn.Form isInvalidAuthorisation={isInvalidAuthorisation} />
    </>
  );
};
