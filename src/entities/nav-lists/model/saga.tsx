import { call, put, takeLatest } from 'redux-saga/effects';

import { axiosInstance, BOOKS_API } from 'shared/api';
import { ErrorMessages } from 'shared/lib';
import { getGenres, setGenres } from '.';
import { GenreType } from '../lib';

function* worker() {
  try {
    const { data } = yield call(axiosInstance.get, BOOKS_API.genres);

    yield put(setGenres(data as GenreType[]));
  } catch {
    // из-за 5157,5158 и 5608,5609 строк sprint7 обрабатываем ошибку только консолькой, без
    // прокидывания в стор
    console.log(ErrorMessages.RELOAD_PAGE);
  }
}

export function* genresWatcher() {
  yield takeLatest(getGenres.type, worker);
}
