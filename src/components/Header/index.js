// Core
import React, { Component } from 'react';

// Instruments
import Styles from './styles.scss';
import { func, object } from 'prop-types';


export default class Header extends Component {

    static propTypes = {
        clearQueryData: func.isRequired,
        setQueryData:   func.isRequired,
        fetchMovies:    func.isRequired,
        value:          object.isRequired
    };

    constructor () {
        super();

        this.handleSubmit = ::this._handleSubmit;
        this.changeQuery = ::this._changeQuery;
        this.changeYear = ::this._changeYear;
        this.clearQuery = ::this._clearQuery;

        this.state = {
            queryValue: '',
            yearValue:  ''
        }
    }

    _changeQuery (event) {        
        this.setState({
            queryValue: event.target.value,
        });
    }

    _changeYear (event) {
        this.setState({
            yearValue: event.target.value,
        });
    }

    _handleSubmit (event) {

        event.preventDefault();

        const { fetchMovies, setQueryData } = this.props;
        const { queryValue, yearValue } = this.state;

        setQueryData({
            queryValue,
            yearValue
        });

        fetchMovies();
    }

    _clearQuery () {
        
        const { fetchMovies, clearQueryData } = this.props;

        clearQueryData();
        fetchMovies();
    }
    
    
    render () {

        const { queryValue, yearValue } = this.state;
        const { value: { queryValue: query, yearValue: year } } = this.props;        
        const printData = !query ?
            null :
            year ?
                <p>Movies for request: <strong>{query}</strong>, year: <strong>{year}</strong></p> :
                <p>Movies for request: <strong>{query}</strong></p>

        return (
            <header>
                <form onSubmit = { this.handleSubmit } >
                    <input type = 'text' placeholder = 'query' name = 'query' value = { queryValue } onChange = { this.changeQuery }/>
                    <input type = 'text' placeholder = 'year' name = 'year' value = { yearValue } onChange = { this.changeYear }/>
                    <input type = 'submit' value = 'Get Movies' disabled = { queryValue ? false : true } />
                    <input type = 'button' value = 'Clear Query Data' disabled = { query ? false : true } onClick = { this.clearQuery }/>
                </form>
                { printData }
            </header>
        );
    }
}
