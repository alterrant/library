import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';

import { getBooks, setBooks, setBooksError } from '.';
import {BooksTypes} from "../lib";
import { axiosInstance, API } from '../../../shared/api';
import { ERROR_MESSAGES } from '../../../shared/lib';

function* worker() {
    try {
        const { data } = yield call(axiosInstance.get, API.bookURL);

        yield put(setBooks(data as BooksTypes));
    } catch (e) {
        if (axios.isAxiosError(e)) yield put(setBooksError(e.message));
        else yield put(setBooksError(ERROR_MESSAGES.FETCHING_BOOKS_ERROR));
    }
}

export function* booksWatcher() {
    yield takeLatest(getBooks.type, worker);
}
