import { RouterProvider } from 'react-router-dom';

import { withProviders } from './providers';

import './index.css';

// TODO: сделать спинер
const App = (router: any) => (
    <RouterProvider
        router={router}
    />
);

export default withProviders(App);
