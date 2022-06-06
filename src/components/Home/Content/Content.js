import React, { useEffect } from 'react';
import { Article } from './Article';
import './css/ContentStyle.css';

export const Content = ({movies, setMovies}) => {
    
    useEffect(() => {
        setMovies(getMovies());
    }, [setMovies]);

    function getMovies() {
        return JSON.parse(localStorage.getItem('movies'));
    }

    return (
        <section className="content">
            {movies != null ?
                movies.map((movie, index) => {
                    return (
                        <Article 
                            key={ index }
                            movieId = { movie.id }
                            movieName={ movie.titleMovie } 
                            movieDescription={ movie.descriptionMovie }
                            getMovies={ getMovies }
                            setMovies={ setMovies }
                        />
                    );
                })
                :
                <h2>Movies not found.</h2>
            }
        </section>
    );
}