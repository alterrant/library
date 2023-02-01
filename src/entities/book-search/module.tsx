import { useState } from 'react';

export const useBookSearchState = () => {
    const [isActivated, setActivatedStatus] = useState<boolean>(false);
    const [isTextChanged, setStatusChangedText] = useState<boolean>(false);

    return {isActivated, setActivatedStatus, isTextChanged, setStatusChangedText};
}
