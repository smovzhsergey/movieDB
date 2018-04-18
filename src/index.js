// Core
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

// Instruments
import store, { history } from 'store';

// Routes
import MainRoute from 'routes';

render(
    <Provider store = { store }>
        <ConnectedRouter history = { history } >
            <MainRoute />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
