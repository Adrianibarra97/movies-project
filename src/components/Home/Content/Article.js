import React from 'react';
import { PropTypes } from 'prop-types';

export const Article = ({ 
    movieId,
    movieName, 
    movieDescription, 
    getMovies, 
    setMovies 
    }) => {
    
    const deleteMovie = (id) => {
        let oldMovies = getMovies();
        let movies = oldMovies.filter( movie => movie.id !== parseInt(id));
        setMovies(movies);
        localStorage.setItem('movies', JSON.stringify(movies));
    }

    return (
        <article className="movie-item">
            <h3 className="title">{movieName}</h3>
            <p className="description">{movieDescription}</p>
            {/* <button className="view">View</button> */}
            <button className="edit">Edit</button>
            <button className="delete" onClick={() => deleteMovie(movieId)}>Delete</button>
        </article>
    );
}

Article.defaultProps = {
    movieName: "Undefined",
    movieDescription: "Undefined"
};

Article.propTypes = {
    movieName: PropTypes.string.isRequired,
    movieDescription: PropTypes.string.isRequired
};