// import { lazy } from 'react';
import {Navigate, createHashRouter} from 'react-router-dom';

import { BookPage } from "./book";
import { MainPage } from "./main";
import { Layout } from "../widgets/layouts/layout";
import { LayoutMainPage } from "../widgets/layouts/layout-main-page";
import { Terms } from "../widgets/terms";
import { LayoutBookPage } from "../widgets/layouts/layout-book-page";
import { CONTRACT_TITLE, RULES_TITLE } from "../entities/terms-lists/config";
import { ErrorBoundary } from "../shared/ui/error-boundary";

// TODO: реализовать lazy loading и suspense
// const TestPage = lazy(() => import("./test"));
// Navigation вынесено из MainPage для соответствия с роутингом

export const routes = createHashRouter([
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
                        element: <Navigate to='books/all' />,
                    },
                    {
                        path: 'books/:categories',
                        element: <MainPage />,
                    },
                    {
                        path: 'books',
                        element: <MainPage />,
                    },
                    {
                        path: 'terms',
                        element: <Terms title={RULES_TITLE} />,
                    },
                    {
                        path: 'contract',
                        element: <Terms title={CONTRACT_TITLE} />,
                    },
                ],
            },
            {
                element: <LayoutBookPage />,
                children: [
                    {
                        path: 'books/:categories/:id',
                        element: <BookPage />,
                    }
                ]
            },
        ],
    },
]);
