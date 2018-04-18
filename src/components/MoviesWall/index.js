// Core
import React, { Component } from 'react';

// Instruments
import Styles from './styles.scss';
import { array, number, object } from 'prop-types';

// Components
import Header from 'components/Header';
import MovieItem from 'components/MovieItem';

export default class MoviesWall extends Component {

    static propTypes = {
        actions:     object.isRequired,
        currentPage: number.isRequired,
        movies:      array.isRequired,
        pages:       number.isRequired,
        queryData:   object.isRequired
    };

    constructor () {
        super();

        this.getMovieList = ::this._getMovieList;
        this.getPagination = ::this._getPagination;
        this.getNewMovies = ::this._getNewMovies;
        this.showMovies = ::this._showMovies;
    }

    componentDidMount () {
        const { actions, movies, queryData: { queryValue } } = this.props;
        
        if (!movies.length && !queryValue) {
            actions.fetchMovies();
        }
    }

    _getNewMovies (event) {
        const page = +event.target.innerText;
        this.props.actions.fetchMovies(page);
    }

    _getPagination () {

        const { pages, currentPage } = this.props;

        const arr = Array.from({length: pages}, (el, i) => i+1);

        return arr.map((el, i) => (
            currentPage === el ?
                <span className = {Styles.active} key = { i } onClick = { this.getNewMovies } >{ el }</span> :
                <span key = { i } onClick = { this.getNewMovies } >{ el }</span>
            )
        );
    }

    _getMovieList () {

        const { movies } = this.props;

        return movies.map(
            ({ id, original_title: originalTitle, poster_path: posterPath, vote_average: voteAverage }) =>
                (<MovieItem
                    id = { id }
                    key = { id }
                    originalTitle = { originalTitle }                   
                    posterPath = { posterPath === null ? '' : posterPath }                   
                    voteAverage = { voteAverage }
                />)
        );
    }

    _showMovies () {
        
        const moviesList = this.getMovieList();
        const pagination = this.getPagination();
        const { movies } = this.props;

        return movies.length === 0 ?
            <h2> Movies for your request not found </h2> :
            (<section>
                <div className = { Styles.movies } id = 'cont' >
                    { moviesList }
                </div>
                <div className = { Styles.paginationPanel }>
                    { pagination }
                </div>
            </section>)
    }

    render () {
        
        const { actions:  { clearQueryData, setQueryData, fetchMovies }, queryData } = this.props;
       
        const printMovies = this.showMovies();

        return (
            <section className = { Styles.mainPage } >
                <Header
                    clearQueryData = { clearQueryData }
                    setQueryData = { setQueryData }
                    fetchMovies = { fetchMovies }
                    value = { queryData }
                /> 
                { printMovies }
            </section>
        );
    }
}
