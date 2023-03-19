import compose from 'compose-function';

import { withAuth } from './with-auth';
import { withStore } from './with-store';
import { withRouter } from './with-router';
// withAuth должен идти перед withRouter
export const withProviders = compose(withStore, withRouter, withAuth);
