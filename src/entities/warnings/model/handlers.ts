import { Dispatch } from 'react';

import { WarningStateTypes } from '../types';

export const closeHandler = (setStatus: Dispatch<WarningStateTypes>) =>
  setStatus({ isOpen: false });
