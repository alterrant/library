import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';

import { axiosInstance, API } from '../../../shared/api';
import { getGenres, setGenres, setGenresError } from '.';
import { ERROR_MESSAGES } from '../../../shared/lib';
import { GenreType } from '../lib';

function* worker() {
    try {
        const { data } = yield call(axiosInstance.get, API.genresURL);

        yield put(setGenres(data as GenreType[]));
    } catch (e) {
        if (axios.isAxiosError(e)) yield put(setGenresError(e.message));
        else yield put(setGenresError(ERROR_MESSAGES.FETCHING_GENRES_ERROR));
    }
}

export function* genresWatcher() {
    yield takeLatest(getGenres.type, worker);
}
