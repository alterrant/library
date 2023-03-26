import { NavigateFunction } from 'react-router-dom';

import { Templates } from 'shared/ui';
import { useAppDispatch } from 'shared/lib';
import { AuthLib, AuthModel } from '../../..';

type SuccessContentProps = {
  setUserInfo: AuthLib.signUpConfig.Types.SetUserInfo;
  navigate: NavigateFunction;
};

export const SuccessContent = ({ navigate, setUserInfo }: SuccessContentProps) => {
  const dispatch = useAppDispatch();

  const { Configs } = AuthLib.signUpConfig;
  const { goToSignIn } = AuthModel.handlers;

  const goToSignInHandler = () => goToSignIn(setUserInfo, dispatch, navigate);

  return <Templates.Auth.MessagesTemplate {...Configs.SUCCESS} clickHandler={goToSignInHandler} />;
};
