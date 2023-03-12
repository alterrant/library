import {Outlet, useNavigate} from "react-router-dom";
import {useEffect} from "react";

import {TOKEN, useAppSelector, usePathname} from "../../shared/lib";
import {authSelector} from "../../features/auth/model";

export const Provider = () => {
    const navigate = useNavigate();
    const pathName = usePathname();
    const { isSuccess } = useAppSelector(authSelector);

    useEffect(() => {
        const token = localStorage.getItem(TOKEN);

        if (!token) {
            if ((pathName !== '/forgot-pass') && (pathName !== '/registration'))
                navigate('auth');
        }
        else navigate('books/all');
    }, [pathName, isSuccess]);

    return (
        <Outlet />
    )
};
