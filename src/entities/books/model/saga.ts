import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';

import { getBooks, setBooks, setBooksError } from '.';
import { BooksTypes } from '../lib';
import { axiosInstance, BOOKS_API } from '../../../shared/api';
import { ErrorMessages } from '../../../shared/lib';

function* worker() {
    try {
        const { data } = yield call(axiosInstance.get, BOOKS_API.bookURL);

        yield put(setBooks(data as BooksTypes));
    } catch (e) {
        if (axios.isAxiosError(e)) yield put(setBooksError(e.message));
        else yield put(setBooksError(ErrorMessages.FETCHING_BOOKS_ERROR));
    }
}

export function* booksWatcher() {
    yield takeLatest(getBooks.type, worker);
}
