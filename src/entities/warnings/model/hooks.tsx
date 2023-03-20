import { Dispatch, useEffect, useState } from 'react';

import { WarningStateTypes } from '../types';

export const useWarningState = (
  isWarning: boolean
): [warningStatus: { isOpen: boolean }, setWarningStatus: Dispatch<{ isOpen: boolean }>] => {
  const [warningStatus, setWarningStatus] = useState<WarningStateTypes>({ isOpen: isWarning });

  useEffect(() => {
    setWarningStatus({ isOpen: isWarning });
  }, [isWarning]);

  return [warningStatus, setWarningStatus];
};
