import { useState } from 'react';

export const useBooksSearchState = () => {
    const [isActivated, setActivatedStatus] = useState<boolean>(false);
    const [isTextChanged, setStatusChangedText] = useState<boolean>(false);
    const [isOpenedInput, setOpenedInputStatus] = useState<boolean>(false);

    return {
        isActivated,
        isTextChanged,
        isOpenedInput,
        setActivatedStatus,
        setStatusChangedText,
        setOpenedInputStatus
    };
};
