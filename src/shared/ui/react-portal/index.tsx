import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

type ReactPortalProps = {
  children: ReactNode;
};

export const ReactPortal = ({ children }: ReactPortalProps) => {
  const sectionElement = document.querySelector<HTMLElement>('#root > section');
  const scrollableElement = sectionElement ?? document.body;

  return createPortal(children, scrollableElement);
};
