//Core
import { Map, List } from 'immutable';

//Instruments
import types from 'actions/fetch/types';

const initialState = Map({
    movies:      List(),
    fullMovie:   Map(),
    isFetching:  false,
    currentPage: 1,
    pages:       0,
    queryData:   Map({
        queryValue: '',
        yearValue:  '',
    }),
});

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case types.START_FETCHING:
            return state.set('isFetching', true);

        case types.STOP_FETCHING:
            return state.set('isFetching', false);

        case types.SET_TOTAL_PAGES:
            return state.set('pages', payload);            

        case types.SET_CURRENT_PAGE:
            return state.set('currentPage', payload);

        case types.FETCH_MOVIES_SUCCESS:
            return state.merge(state, {
                movies: List(payload)
            });

        case types.FETCH_FULL_MOVIE_SUCCESS:
            return state.merge(state, {
                fullMovie: Map(payload)
            });

        case types.SET_QUERY_DATA:
            return state.merge(state, {
                queryData: Map(payload)
            });

        case types.CLEAR_QUERY_DATA:
            return state.merge(state, {
                queryData: Map({
                    queryValue: '',
                    yearValue:  '',
                })
            });

        default:
            return state;
    }
};
