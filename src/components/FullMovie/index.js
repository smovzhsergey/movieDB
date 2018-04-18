//Core
import React from 'react';
import { Link } from 'react-router-dom';

//Instruments
import { string } from 'prop-types';
import Styles from './styles.scss';
import { urlImage } from 'instruments/api';
import nimg from 'theme/img/nimg.png';

const FullMovie = ({ homepage, overview, poster_path: posterPath, title, vote_average: vote }) => {	
	return (
		<div className = { Styles.fullMovie }>
			<h2>{ title }</h2>
			<img src = { `${urlImage}${posterPath}` } />
			<p>{ overview }</p>
			<p>Popularity: { vote }</p>
			<p>Homepage: <a href = { homepage } target = '_blank' >{ homepage }</a></p>
			<Link to = { `/` } className = {Styles.back} >Back</Link>
		</div>
	);	
}

FullMovie.propTypes = {
	homepage: 	 string.isRequired,
	overview: 	 string.isRequired,
	poster_path: string.isRequired,
	title: 		 string.isRequired
}

export default FullMovie;
