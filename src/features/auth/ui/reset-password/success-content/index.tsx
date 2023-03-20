import { NavigateFunction } from 'react-router-dom';

import { AuthLib, AuthModel } from '../../..';
import { Templates } from '../../../../../shared/ui';
import { DispatchAnyType } from '../../../../../shared/lib';

type SuccessContentProps = {
  dispatch: DispatchAnyType;
  navigate: NavigateFunction;
};

export const SuccessContent = ({ dispatch, navigate }: SuccessContentProps) => {
  const { Configs } = AuthLib.resetPassConfig;
  const { goToSignInResetHandler } = AuthModel.handlers;

  const goToSignIn = () => goToSignInResetHandler(dispatch, navigate);

  return <Templates.Auth.MessagesTemplate {...Configs.SUCCESS} clickHandler={goToSignIn} />;
};
