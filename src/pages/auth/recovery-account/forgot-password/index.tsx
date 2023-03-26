import { AuthContent } from 'widgets';
import { Templates } from 'shared/ui';

export const ForgotPassword = () => (
  <Templates.Auth.Wrapper header={<AuthContent.Header />}>
    <AuthContent.Recovery.ForgotPass />
  </Templates.Auth.Wrapper>
);
