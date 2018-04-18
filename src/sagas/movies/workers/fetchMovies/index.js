//Core
import { call, put, select } from 'redux-saga/effects';

//Instrument
import { apiKey, apiPath } from 'instruments/api';
import fetchActions from 'actions/fetch';

export function* fetchMoviesWorker ({ payload: currPage = 1 }) {
    try {
        const query = yield select((state) => state.fetch.get('queryData').toJS());

        yield put(fetchActions.startFetching());

        const url = query.queryValue === '' ?
            `${apiPath}movie/now_playing${apiKey}&language=en-US&page=${currPage}` :
            `${apiPath}search/movie${apiKey}&language=en-US&page=${currPage}&query=${query.queryValue}&year=${query.yearValue}`;
            
        const responseMovies = yield call(fetch, url, {
            method: 'GET',
        });

        if (responseMovies.status !== 200) {
            yield put(fetchActions.stopFetching());
            throw new Error('Movies were not loaded.');
        }

        const { page, results, total_pages } = yield call([responseMovies, responseMovies.json]);
        
        yield put(fetchActions.fetchMoviesSuccess(results));
        yield put(fetchActions.setTotalPages(total_pages));
        yield put(fetchActions.setCurrentPage(page));
        yield put(fetchActions.stopFetching());
    } catch ({ message }) {
        yield put(fetchActions.fetchMoviesFail(message));
    }
}
