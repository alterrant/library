import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import { useLocation } from 'react-router-dom';
import {useEffect} from "react";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const usePathname = () => useLocation().pathname;

export const useFetch = (
    action: { type: string, payload?: any },
    isCached?: boolean,
    ...deps: any
) => {
    const dispatch = useAppDispatch();

    let isSecondEffect = false;

    useEffect(() => {
        if (!isSecondEffect && !isCached) {
            dispatch(action);
        }

        return () => {
            isSecondEffect = true;
        };

        }, [...deps]);
};
