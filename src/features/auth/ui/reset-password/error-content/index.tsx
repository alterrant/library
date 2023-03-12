import { AuthModel, AuthLib } from '../../..';
import { DispatchAnyType } from '../../../../../shared/lib';
import { Templates } from '../../../../../shared/ui';

type ErrorContentProps = {
    dispatch: DispatchAnyType;
};

export const ErrorContent = ({ dispatch }: ErrorContentProps) => {
    const { Configs } = AuthLib.resetPassConfig;
    const { tryAgainResetPass } = AuthModel.handlers;

    const tryAgain = () => tryAgainResetPass(dispatch);

    return  (
        <Templates.Auth.MessagesTemplate
            {...Configs.ERRORS}
            clickHandler={tryAgain}
        />
    );
};
