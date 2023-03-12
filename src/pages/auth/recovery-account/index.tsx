import { useSearchParams } from "react-router-dom";

import { ForgotPassword, ResetPassword } from "..";

export const RecoveryAccount = () => {
    const [searchParams] = useSearchParams();
    const code = searchParams.get('code');

    return code ? <ResetPassword code={code} /> : <ForgotPassword />;
};
