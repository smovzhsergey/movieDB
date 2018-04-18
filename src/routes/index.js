import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, withRouter } from 'react-router';

//Containers
import Movies from 'containers/Movies';
import SingleMovie from 'containers/SingleMovie';

class MainRoute extends Component {
    render () {
        return (
            <Switch>
                <Route component = { Movies } path = { `/movies/` } />
                <Route exact component = { SingleMovie } path = { `/:id` } />
                <Redirect to = { `/movies/` } />
            </Switch>
        );
    }
}

export default withRouter(connect()(MainRoute));
