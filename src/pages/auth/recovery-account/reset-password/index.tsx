import { AuthContent } from "../../../../widgets";
import { Templates } from "../../../../shared/ui";

type ResetPasswordProps = {
    code: string;
};

export const ResetPassword = ({code}: ResetPasswordProps) => (
    <Templates.Auth.Wrapper>
        <AuthContent.Recovery.ResetPass code={code} />
    </Templates.Auth.Wrapper>
);
