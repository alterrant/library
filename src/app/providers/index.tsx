import compose from 'compose-function';

import { withRouter } from './with-router';

// Первым должен идти withRouter
export const withProviders = compose(withRouter);
