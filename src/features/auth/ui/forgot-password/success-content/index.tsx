import { AuthLib } from '../../..';
import { Templates } from '../../../../../shared/ui';

export const SuccessContent = () => {
  const { Configs } = AuthLib.forgotPassConfig;

  return <Templates.Auth.MessagesTemplate {...Configs.SUCCESS} />;
};
