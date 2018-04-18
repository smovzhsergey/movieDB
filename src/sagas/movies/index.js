//Core
import { takeEvery } from 'redux-saga/effects';

//Instruments
import types from 'actions/fetch/types';
import { fetchMoviesWorker } from './workers/fetchMovies';
import { fetchFullMovieWorker } from './workers/fetchFullMovie';


export default Object.freeze({
    * fetchMoviesWatcher () {
        yield takeEvery(types.FETCH_MOVIES, fetchMoviesWorker);
    },
    * fetchFullMovieWatcher () {
    	yield takeEvery(types.FETCH_FULL_MOVIE, fetchFullMovieWorker);
    }    
});
