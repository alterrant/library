import { AuthModel, AuthLib } from '../../..';
import { Templates } from '../../../../../shared/ui';
import { useAppDispatch } from '../../../../../shared/lib';

export const ErrorContent = () => {
    const dispatch = useAppDispatch();
    const { Configs } = AuthLib.signInConfig;

    const tryAgain = () => AuthModel.handlers.tryAgainSignIn(dispatch);

    return  (
        <Templates.Auth.MessagesTemplate
            {...Configs.ERRORS}
            clickHandler={tryAgain}
        />
    );
};
