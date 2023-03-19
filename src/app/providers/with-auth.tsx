import { RouteObject } from 'react-router-dom';

import { AuthProcess } from '../../processes';
import { AuthPages } from '../../pages';
import { ErrorBoundary } from '../../shared/ui';

export const withAuth = (routes: RouteObject[]) => [
  {
    element: <AuthProcess.Provider />,
    errorElement: <ErrorBoundary text='authError' />,
    children: [
      ...routes,
      {
        path: 'auth',
        element: <AuthPages.SignIn />,
      },
      {
        path: 'registration',
        element: <AuthPages.SignUp />,
      },
      {
        path: 'forgot-pass',
        element: <AuthPages.RecoveryAccount />,
      },
    ],
  },
];
