import { NavigateFunction } from 'react-router-dom';

import { TOKEN } from '../../../../shared/lib';

export const signOut = (navigate: NavigateFunction) => {
  localStorage.removeItem(TOKEN);
  navigate('../auth');
};
