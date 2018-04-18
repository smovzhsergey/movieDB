// Core
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import createSagaMiddleware from 'redux-saga';

// Instruments
import reducers from 'reducers';
import { saga } from 'sagas';

const dev = process.env.NODE_ENV === 'development'; // eslint-disable-line
const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devtools && dev ? devtools : compose;

const middleware = [];

const history = createHistory();

middleware.push(routerMiddleware(history));

const sagaMiddleware = createSagaMiddleware();

middleware.push(sagaMiddleware);

export { history };

export default createStore(reducers, composeEnhancers(applyMiddleware(...middleware)));

sagaMiddleware.run(saga);
