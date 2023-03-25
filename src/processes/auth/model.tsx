import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { authSelector } from 'features/auth/model';
import { UserModel } from 'entities/user';
import { TOKEN, useAppDispatch, useAppSelector, usePathname } from 'shared/lib';

export const Provider = () => {
  const navigate = useNavigate();
  const pathName = usePathname();
  const dispatch = useAppDispatch();
  const { isSuccess } = useAppSelector(authSelector);
  const { user: currentUser } = useAppSelector(UserModel.userSelector);
  const [useEffectState, setUseEffectState] = useState({ isFirstEffect: false });

  useEffect(() => {
    if (useEffectState.isFirstEffect) {
      const token = localStorage.getItem(TOKEN);

      if (!token) {
        if (pathName !== '/forgot-pass' && pathName !== '/registration') navigate('auth');
      } else if (pathName === '/forgot-pass' || pathName === '/registration' || pathName === '/auth') {

        navigate('books/all');
      /* } else if (!currentUser.id) {
        dispatch(UserModel.me());
      } */
    } else {
      dispatch(UserModel.me());
    }

      // if (!currentUser.id) dispatch(UserModel.me());
    }

    return () => setUseEffectState({ isFirstEffect: true });
  }, [pathName, isSuccess, useEffectState.isFirstEffect]);

  return <Outlet />;
};
