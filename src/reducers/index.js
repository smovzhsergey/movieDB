// Core
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

// Instruments
import fetch from './fetch';

export default combineReducers({
    router,
    fetch,
});
