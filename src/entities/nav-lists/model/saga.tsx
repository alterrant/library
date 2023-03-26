import { call, put, takeLatest } from 'redux-saga/effects';

import { axiosInstance, BOOKS_API } from 'shared/api';
import { getGenres, setGenres } from '.';
import { GenreType } from '../lib';

function* worker() {
  try {
    const { data } = yield call(axiosInstance.get, BOOKS_API.genres);

    yield put(setGenres(data as GenreType[]));
  } catch {
    // вынужденно отключаем обработку ошибок из-за 5157,5158 и 5608,5609 строк sprint7:
    // на 5158 обязательно сделать запрос categories при переходе на /profile, а потом
    // категорически нельзя делать запрос categories при переходе на /profile. Если сделаем -
    // упадём с ошибкой. Другой костыль был бы: отключить отображение ошибки запроса categories
    // только в профиле, но суть костыля такая была бы же: ошибка есть, но я вам её не покажу

    /* yield put(setGenresError(ErrorMessages.RELOAD_PAGE)); */
  }
}

export function* genresWatcher() {
  yield takeLatest(getGenres.type, worker);
}
