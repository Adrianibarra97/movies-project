import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { Edit } from './Edit';

export const Article = ({ 
    movieId,
    movieName, 
    movieDescription, 
    getMovies, 
    setMovies 
    }) => {

    const [ edit, setEdit] = useState(0);
    
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
            <button className="edit" onClick={ ()=> setEdit(movieId) }>Edit</button>
            <button className="delete" onClick={() => deleteMovie(movieId)}>Delete</button>
            {edit === movieId && (
                <Edit 
                    movieId={ movieId }
                    movieName={ movieName }
                    movieDescription={ movieDescription }
                    getMovies={ getMovies }
                    setMovies={ setMovies }
                    setEdit={ setEdit }
                />
            )}
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