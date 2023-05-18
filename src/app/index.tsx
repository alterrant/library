import { routes } from 'pages';
import { withProviders } from './providers';

/* TODO:
    отделить lib от config, вынести функции/константы в них,
    убрать дрожание экнара при модалках,
*/

import './index.css';

export default withProviders(routes);
