import { Params } from '@remix-run/router/utils';
import { BOOKS } from '../../widgets/book-cards/config';

// TODO: id может не быть в списке книг, тогда будет undefined.title
export const getTitleById = (pathname: Readonly<Params<string>>) =>
    BOOKS[Number(pathname?.id)]?.title

export const getNavigationList = (pathname: Readonly<Params<string>>) => {
    const navigationList = [];

    navigationList.push(pathname?.categories);
    navigationList.push(getTitleById(pathname));
    /* for (let key in pathname ) {
        navigationList.push(pathname[key]);
    } */

    return navigationList.join(' / ');
};
