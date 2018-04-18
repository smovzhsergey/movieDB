//Core
import { all } from 'redux-saga/effects';

//Instruments
import movies from './movies';

export function* saga () {
    yield all([
        movies.fetchMoviesWatcher(),
        movies.fetchFullMovieWatcher()
    ]);
}
