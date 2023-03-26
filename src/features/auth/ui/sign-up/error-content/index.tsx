import { Templates } from 'shared/ui';
import { useAppDispatch } from 'shared/lib';
import { AuthLib, AuthModel } from '../../..';

type ErrorContentProps = {
  errorMessage: string;
  setStep: AuthLib.signUpConfig.Types.SetStep;
  userInfo: AuthLib.signUpConfig.Types.UserInfo;
  setUserInfo: AuthLib.signUpConfig.Types.SetUserInfo;
};

export const ErrorContent = ({
  errorMessage,
  setStep,
  userInfo,
  setUserInfo,
}: ErrorContentProps) => {
  const { checkUserExistMessage, Configs } = AuthLib.signUpConfig;
  const { handlers } = AuthModel;
  const { tryAgainSignUp, retrySignUpRequest } = handlers;

  const isUserExist = checkUserExistMessage(errorMessage);
  const dispatch = useAppDispatch();

  const tryAgain = () => tryAgainSignUp(setStep, setUserInfo, dispatch);
  const retryRequest = () => retrySignUpRequest(userInfo, dispatch);

  return isUserExist ? (
    <Templates.Auth.MessagesTemplate {...Configs.EXIST_ERROR} clickHandler={tryAgain} />
  ) : (
    <Templates.Auth.MessagesTemplate {...Configs.ERRORS} clickHandler={retryRequest} />
  );
};
