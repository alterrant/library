import { useState } from 'react';

import { SetToggleStatusType, ToggleStatusType } from '../../../shared/lib';

export const useToggleState = (
  initialStatus = { isOpen: false }
): [toggleStatus: ToggleStatusType, setToggleStatus: SetToggleStatusType, resetToggleState: () => void] => {
  const [toggleStatus, setToggleStatus] = useState<ToggleStatusType>(initialStatus);

  const resetToggleStatus = () => setToggleStatus(initialStatus);

  return [toggleStatus, setToggleStatus, resetToggleStatus];
};
