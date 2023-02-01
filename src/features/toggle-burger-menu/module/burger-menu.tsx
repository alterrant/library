import {useState} from "react";
import {IsOpenType, ToggleStatusType} from "../config";

export const useBurgerState = (): [isOpen: IsOpenType, toggleStatus: ToggleStatusType] => {
    const [isOpen, toggleStatus] = useState<IsOpenType>(false);

    return [isOpen, toggleStatus];
};
export const toggleHandler = (isOpen: IsOpenType, toggleStatus:ToggleStatusType) =>
    toggleStatus(!isOpen);
