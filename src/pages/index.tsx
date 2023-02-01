// import { lazy } from 'react';
import {Navigate, createHashRouter} from 'react-router-dom';

import {Layout} from "./layout";
import {MainPage} from "./main";
import {LayoutMainPage} from "./layout-main-page";
import {Terms} from "../widgets/terms";
import {ErrorBoundary} from "../shared/ui/error-boundary";
import {CONTRACT_TITLE, RULES_TITLE} from "../entities/terms-lists/config";
import {BookPage} from "./book";

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
                        element: <Navigate to='all' />,
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
                path: 'books/:categories/:id',
                element: <BookPage />
            },
        ],
    },
]);
