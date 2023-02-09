import { useState } from 'react';

import { IsOpenType, ToggleStatusType } from '../config';

export const useToggleState = (initialStatus = false): [
    isOpen: IsOpenType,
    toggleStatus: ToggleStatusType
] => {
    const [isOpen, toggleStatus] = useState<IsOpenType>(initialStatus);

    return [isOpen, toggleStatus];
};
