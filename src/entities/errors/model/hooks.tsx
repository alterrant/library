import { Dispatch, useEffect, useState } from 'react';

import { ErrorStateTypes } from '../types';

export const useErrorState = (isError: boolean): [
    errorsStatus: {isOpen: boolean},
    setErrorsStatus: Dispatch<{ isOpen: boolean }>
] => {
    const [errorsStatus, setErrorsStatus] =
        useState<ErrorStateTypes>({ isOpen: isError });

    useEffect(() => {
        setErrorsStatus({ isOpen: isError })
    }, [isError])

    return [errorsStatus, setErrorsStatus];
};
