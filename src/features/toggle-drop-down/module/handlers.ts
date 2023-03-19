import { IsOpenType, ToggleStatusType } from '..';

export const toggleHandler = (isOpen: IsOpenType, toggleStatus: ToggleStatusType) =>
  toggleStatus(!isOpen);

export const closeHandler = (toggleStatus: ToggleStatusType) => toggleStatus(false);
