import {Dispatch} from "react";

import {ErrorStateTypes} from "../types";

export const closeHandler = (setStatus: Dispatch<ErrorStateTypes>) =>
    setStatus({ isOpen: false });
