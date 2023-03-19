import { createHashRouter, RouteObject, RouterProvider } from 'react-router-dom';

export const withRouter = (routes: RouteObject[]) => () =>
  <RouterProvider router={createHashRouter(routes)} />;
