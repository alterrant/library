import { NavListModel } from '../../../../entities/nav-lists';
import { BooksModel } from '../../../../entities/books';
import { BookModel } from '../../../../entities/book';
import { useAppSelector } from '../../../../shared/lib';

export const useCheckErrors = (): boolean => {
    const { error: navError } = useAppSelector(NavListModel.genresSelector);
    const { error: booksError } = useAppSelector(BooksModel.booksSelector);
    const { error: bookError } = useAppSelector(BookModel.bookSelector);

    return !!(navError || booksError || bookError);
};
