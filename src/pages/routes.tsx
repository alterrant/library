import { Navigate } from 'react-router-dom';

import { Layout, LayoutMainPage, LayoutBookPage } from 'widgets/layouts';
import { Terms } from 'widgets/terms';
import { CONTRACT_TITLE, RULES_TITLE, ROUTS } from 'shared/lib';
import { ErrorBoundary } from 'shared/ui';
import { BookPage } from './book';
import { MainPage } from './main';
import { ProfilePage } from './profile';

const { BOOKS, CONTRACT, PROFILE, TERMS, ID, ALL, GENRES } = ROUTS.BASE;
// Navigation вынесено из MainPage в Layout для упрощения роутинга
export const routes = [
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        element: <LayoutMainPage />,
        children: [
          {
            path: '/',
            element: <Navigate to={`${BOOKS}/${ALL}`} />,
          },
          {
            path: `${BOOKS}/:${GENRES}`,
            element: <MainPage />,
          },
          {
            path: BOOKS,
            element: <MainPage />,
          },
          {
            path: TERMS,
            element: <Terms title={RULES_TITLE} />,
          },
          {
            path: CONTRACT,
            element: <Terms title={CONTRACT_TITLE} />,
          },
        ],
      },
      {
        element: <LayoutBookPage />,
        children: [
          {
            path: `${BOOKS}/:${GENRES}/:${ID}`,
            element: <BookPage />,
          },
        ],
      },
      {
        path: PROFILE,
        element: <ProfilePage />,
      },
    ],
  },
];
