import { ReactNode } from 'react';

import { Preloader } from 'shared/ui';

type LoaderProps = {
  isLoading: boolean;
  isError: boolean;
  isReplaceContent?: boolean;
  children: ReactNode;
};

export const Loader = ({ children, isLoading, isError, isReplaceContent = true }: LoaderProps) => {
  if (isError) return null;

  if (!isLoading) return <>{children}</>;

  if (isReplaceContent) return <Preloader />;

  return (
    <>
      <Preloader />
      {children}
    </>
  );
};
