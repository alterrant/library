import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { authSelector } from 'features/auth/model';
import { UserModel } from 'entities/user';
import { checkIsAuthPath, ROUTS, TOKEN, useAppDispatch, useAppSelector, usePathname } from 'shared/lib';

export const Provider = () => {
  const navigate = useNavigate();
  const pathName = usePathname();
  const dispatch = useAppDispatch();

  const { isSuccess } = useAppSelector(authSelector);
  const [useEffectState, setUseEffectState] = useState({ isFirstEffect: false });

  const isAuthPathNames = checkIsAuthPath(pathName);

  useEffect(() => {
    if (useEffectState.isFirstEffect) {
      const token = localStorage.getItem(TOKEN);

      if (!token) {
        if (!isAuthPathNames) navigate(ROUTS.AUTH.AUTH);
      } else if (isAuthPathNames) {
        navigate(`${ROUTS.BASE.BOOKS}/${ROUTS.BASE.ALL}`);
      } else {
        dispatch(UserModel.me());
      }
    }

    return () => setUseEffectState({ isFirstEffect: true });
  }, [pathName, isSuccess, useEffectState.isFirstEffect]);

  return <Outlet />;
};
