import { Templates } from 'shared/ui';
import { useAppDispatch } from 'shared/lib';
import { AuthModel, AuthLib } from '../../..';

export const ErrorContent = () => {
  const dispatch = useAppDispatch();
  const { Configs } = AuthLib.signInConfig;

  const tryAgain = () => AuthModel.handlers.tryAgainSignIn(dispatch);

  return <Templates.Auth.MessagesTemplate {...Configs.ERRORS} clickHandler={tryAgain} />;
};
