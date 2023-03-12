// import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

import { BookPage } from './book';
import { MainPage } from './main';
import { Layout, LayoutMainPage, LayoutBookPage } from '../widgets/layouts';
import { Terms } from '../widgets/terms';
import { CONTRACT_TITLE, RULES_TITLE } from '../shared/lib';
import { ErrorBoundary } from '../shared/ui';

// TODO: реализовать lazy loading и suspense
// const TestPage = lazy(() => import("./test"));
// Navigation вынесено из MainPage для соответствия с роутингом
// TODO: вынести константные руты в отельный файл
export const routes = [{
    path: '/',
    element: <Layout/>,
    errorElement: <ErrorBoundary/>,
    children: [
        {
            element: <LayoutMainPage/>,
            children: [
                {
                    path: '/',
                    element: <Navigate to='books/all'/>,
                },
                {
                    path: 'books/:genres',
                    element: <MainPage/>,
                },
                {
                    path: 'books',
                    element: <MainPage/>,
                },
                {
                    path: 'terms',
                    element: <Terms title={RULES_TITLE}/>,
                },
                {
                    path: 'contract',
                    element: <Terms title={CONTRACT_TITLE}/>,
                },
            ],
        },
        {
            element: <LayoutBookPage/>,
            children: [
                {
                    path: 'books/:genres/:id',
                    element: <BookPage/>,
                },
            ]
        },
    ],
}];
