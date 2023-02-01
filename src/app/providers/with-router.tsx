// import {Router as RemixRouter} from "@remix-run/router/dist/router";
import { routes } from '../../pages';

export const withRouter = (component: (routes: any) => React.ReactNode) => () => (
    <>
        {component(routes)}
    </>
);
