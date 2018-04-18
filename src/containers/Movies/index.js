// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Instruments
import { array, bool, number, object } from 'prop-types';
import fetchActions from 'actions/fetch';

// Components
import MoviesWall from 'components/MoviesWall';
import Spinner from 'components/Spinner';

class Movies extends Component {
    static propTypes = {
        actions:     object.isRequired,
        currentPage: number.isRequired,
        isFetching:  bool.isRequired,
        movies:      array.isRequired,
        pages:       number.isRequired,
        queryData:   object.isRequired,
    };

    render () {
        const { isFetching } = this.props;
        return isFetching ?
            <Spinner /> :
            <MoviesWall { ...this.props } />;
    }
}

const mapStateToProps = ({ fetch }) => ({
    movies:      fetch.get('movies').toJS(),
    queryData:   fetch.get('queryData').toJS(),
    isFetching:  fetch.get('isFetching'),
    currentPage: fetch.get('currentPage'),
    pages:       fetch.get('pages'),
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({ ...fetchActions }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
