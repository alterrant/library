import {Dispatch, useEffect, useState} from 'react';

import { NavListModel } from 'entities/nav-lists';
import { BooksModel } from 'entities/books';
import { BookModel } from 'entities/book';
import {useAppSelector} from "../../../shared/lib";
import {ErrorStateTypes} from "../types";

const useCheckErrors = (): boolean => {
    const { error: navError } = useAppSelector(NavListModel.genresSelector);
    const { error: booksError } = useAppSelector(BooksModel.booksSelector);
    const { error: bookError } = useAppSelector(BookModel.bookSelector);

    return !!(navError || booksError || bookError);
};

export const useErrorState = (): [
    errorsStatus: {isOpen: boolean},
    setErrorsStatus: Dispatch<{ isOpen: boolean }>
] => {
    const isError = useCheckErrors();
    const [errorsStatus, setErrorsStatus] =
        useState<ErrorStateTypes>({ isOpen: isError });

    useEffect(() => {
        setErrorsStatus({ isOpen: isError })
    }, [isError])

    return [errorsStatus, setErrorsStatus];
}
