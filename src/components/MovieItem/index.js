//Core
import React from 'react';
import { Link } from 'react-router-dom';

//Instruments
import { string, number } from 'prop-types';
import Styles from './styles.scss';
import { urlImage } from 'instruments/api';
import nimg from 'theme/img/nimg.png';

const MovieItem = ({ id, posterPath, originalTitle, voteAverage }) => {
    const image = posterPath ?
        <img alt = { originalTitle } src = { `${urlImage}${posterPath}` } /> :
        <img alt = { originalTitle } src = { nimg } />
        
    return (
        <section className = { Styles.film }>
            <Link to = { `/${id}` }>
                <h4>{ originalTitle }</h4>
                <figure>
                    { image }
                    <figcaption>{ voteAverage }</figcaption>
                </figure>
            </Link>
        </section>
    );
}

MovieItem.propTypes = {
    id:            number.isRequired,
    originalTitle: string.isRequired,
    posterPath:    string.isRequired,
    voteAverage:   number.isRequired
};

export default MovieItem;
