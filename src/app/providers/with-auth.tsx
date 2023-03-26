import { RouteObject } from 'react-router-dom';

import { AuthProcess } from 'processes';
import { AuthPages } from 'pages';
import { ROUTS } from 'shared/lib';
import { ErrorBoundary } from 'shared/ui';

const { AUTH, REGISTRATION, FORGOT_PASS } = ROUTS.AUTH;

export const withAuth = (routes: RouteObject[]) => [
  {
    element: <AuthProcess.Provider />,
    errorElement: <ErrorBoundary text='authError' />,
    children: [
      ...routes,
      {
        path: AUTH,
        element: <AuthPages.SignIn />,
      },
      {
        path: REGISTRATION,
        element: <AuthPages.SignUp />,
      },
      {
        path: FORGOT_PASS,
        element: <AuthPages.RecoveryAccount />,
      },
    ],
  },
];
