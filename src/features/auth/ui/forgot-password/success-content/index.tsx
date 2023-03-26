import { Templates } from 'shared/ui';
import { AuthLib } from '../../..';

export const SuccessContent = () => {
  const { Configs } = AuthLib.forgotPassConfig;

  return <Templates.Auth.MessagesTemplate {...Configs.SUCCESS} />;
};
