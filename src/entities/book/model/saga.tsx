import axios from 'axios';
import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from 'redux-saga/effects';

import { getBook, setBook, setBookError } from '.';
import { BookInfoTypes } from "../lib";
import { axiosInstance, API } from '../../../shared/api';
import { ERROR_MESSAGES } from '../../../shared/lib';

function* worker({ payload: id }: PayloadAction<string>) {
    try {
        const { data } = yield call(axiosInstance.get, API.bookUrl(id));

        yield put(setBook(data as BookInfoTypes));
    } catch (e) {
        if (axios.isAxiosError(e)) yield put(setBookError(e.message));
        else yield put(setBookError(ERROR_MESSAGES.FETCHING_BOOK_ERROR));
    }
}

export function* bookWatcher() {
    yield takeLatest(getBook.type, worker);
}
