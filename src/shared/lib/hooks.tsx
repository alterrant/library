import { useEffect } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const usePathname = () => useLocation().pathname;

export const useFetch = (
  action: { type: string; payload?: any },
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

export const useClickOutside = (isListening: boolean, onClick: (e: MouseEvent) => void) => {
  useEffect(() => {
    document.addEventListener('click', onClick, true);

    return () => document.removeEventListener('click', onClick, true);
  }, [isListening, onClick]);
};

export const useScrollLock = (isOpen: boolean) => {
  const scrollElement = document.querySelector<HTMLElement>('#root > section');

  useEffect(() => {
    if (isOpen && scrollElement) {
      scrollElement.style.overflowY = 'hidden';

      return () => {
        scrollElement.style.overflowY = 'scroll';
      };
    }
  });
};
