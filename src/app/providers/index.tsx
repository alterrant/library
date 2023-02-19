import compose from 'compose-function';

import { withRouter } from './with-router';
import { withStore } from "./with-store";
// Первым должен идти withRouter
export const withProviders = compose(withStore,withRouter);
