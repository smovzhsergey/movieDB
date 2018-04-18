// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Instruments
import { bool, object } from 'prop-types';
import fetchActions from 'actions/fetch';

// Components
import FullMovie from 'components/FullMovie';
import Spinner from 'components/Spinner';

class SingleMovie extends Component {

    static propTypes = {
        actions:    object.isRequired,
        isFetching: bool.isRequired,
        fullMovie:  object.isRequired,
    };

    componentDidMount () {

        const { id } = this.props.match.params;
        
        this.props.actions.fetchFullMovie(id);
    }

    render () {        
        const { fullMovie, isFetching } = this.props;

        return isFetching ?
            <Spinner /> :
            <FullMovie { ...fullMovie } />     
    }
}

const mapStateToProps = ({ fetch }) => ({
    fullMovie:  fetch.get('fullMovie').toJS(),
    isFetching: fetch.get('isFetching')
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({ ...fetchActions }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleMovie);
