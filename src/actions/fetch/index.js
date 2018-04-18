// Core
import types from './types';

export default Object.freeze({
    fetchMovies: (page) => ({
        type:    types.FETCH_MOVIES,
        payload: page,
    }),
    fetchMoviesSuccess: (movies) => ({
        type:    types.FETCH_MOVIES_SUCCESS,
        payload: movies,
    }),
    fetchMoviesFail: (message) => ({
        type:    types.FETCH_MOVIES_FAIL,
        payload: message,
    }),
    fetchFullMovie: (id) => ({
        type:    types.FETCH_FULL_MOVIE,
        payload: id,
    }),
    fetchFullMovieSuccess: (singleMovie) => ({
        type:    types.FETCH_FULL_MOVIE_SUCCESS,
        payload: singleMovie,
    }),
    fetchFullMovieFail: (message) => ({
        type:    types.FETCH_FULL_MOVIE_FAIL,
        payload: message,
    }),
    increaseCurrentPage: () => ({
        type: types.INCREASE_CURRENT_PAGE,
    }),
    setTotalPages: (number) => ({
        type:    types.SET_TOTAL_PAGES,
        payload: number,
    }),
    setCurrentPage: (number) => ({
        type:    types.SET_CURRENT_PAGE,
        payload: number,
    }),
    setQueryData: (data) => ({
        type:    types.SET_QUERY_DATA,
        payload: data,
    }),
    clearQueryData: (data) => ({
        type:    types.CLEAR_QUERY_DATA,
        payload: data,
    }),
    startFetching: () => ({
        type: types.START_FETCHING,
    }),
    stopFetching: () => ({
        type: types.STOP_FETCHING,
    }),
});
