//Core
import { call, put } from 'redux-saga/effects';

//Instrument
import { apiKey, apiPath } from 'instruments/api';
import fetchActions from 'actions/fetch';

export function* fetchFullMovieWorker ({ payload: id }) {
    try {

        yield put(fetchActions.startFetching());

        const url = `${apiPath}movie/${id}${apiKey}&language=en-US`;

        const response = yield call(fetch, url, {
            method: 'GET',
        });

        if (response.status !== 200) {
            yield put(fetchActions.stopFetching());
            throw new Error('Movie was not loaded.');
        }

        const results = yield call([response, response.json]);

        yield put(fetchActions.fetchFullMovieSuccess(results));
        yield put(fetchActions.stopFetching());
    } catch ({ message }) {
        yield put(fetchActions.fetchFullMovieFail(message));
    }
}
