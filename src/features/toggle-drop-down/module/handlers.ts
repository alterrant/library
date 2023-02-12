import { IsOpenType, ToggleStatusType } from '../config';

export const toggleHandler = (isOpen: IsOpenType, toggleStatus:ToggleStatusType) =>
    toggleStatus(!isOpen);
