import { useEffect } from 'react';

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
