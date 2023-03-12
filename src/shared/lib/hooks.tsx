import { useEffect, } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

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
        }, [...deps, ]);
};
// TODO: дописать useLocalStorage
/*
const getStorageData = (keyName: string) =>{
    const savedItem = localStorage.getItem(keyName);

    if (savedItem) return JSON.parse(savedItem);
    return null
}
export type ValueType = Record<string, string>;
type UseLocalStorageType = (keyName: string) => [value: ValueType, setValue: Dispatch<ValueType>];
export const useLocalStorage: UseLocalStorageType = (keyName: string) => {
    const [value, setValue] = useState<ValueType>(() => getStorageData(keyName));

    useEffect(() => {
        localStorage.setItem(keyName, JSON.stringify(value));
    }, [keyName, value]);

    return [value, setValue];
} */
/*
const getStorageData = (keyName: string) => {
    return localStorage.getItem(keyName);
}

type ValueType = string;
type UseLocalStorageType = (keyName: string, isSuccess: boolean) => [value: ValueType, setValue: Dispatch<ValueType>];
export const useLocalStorage: UseLocalStorageType = (keyName, isSuccess) => {
    const [value, setValue] = useState<ValueType>(() => getStorageData(keyName));

    useEffect(() => {
        //console.log(localStorage.getItem(keyName));
        localStorage.setItem(keyName, value);
    }, [keyName, value]);

    return [value, setValue];
} */
