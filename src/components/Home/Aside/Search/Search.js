import React, { useState } from 'react';

export const Search = ({ movies, setMovies }) => {
    const [ search, setSearch ] = useState('');
    const [ notFound, setNotFound ] = useState(false);

    const searchMovies = (e) => {
        setSearch(e.target.value);
        let foundMovies = movies.filter(movie => {
            return movie.titleMovie.toLowerCase().includes(search.toLowerCase())
        });
        
        if(search.length <= 1 || foundMovies.length <= 0) {
            foundMovies = JSON.parse(localStorage.getItem("movies"));
            setNotFound(true);
        }else {
            setNotFound(false);
        }

        setMovies(foundMovies);
    }

    return (
        <div className="search">
            <h3 className="title">Search: { search }</h3>
            { (notFound && search.length > 1) && (
                <span className="not-found">
                    Not found movie!
                </span>
            )}
            <form>
                <input 
                    type="text" 
                    name="search"
                    autoComplete='off'
                    value={search}
                    onChange={ searchMovies }
                />
                <button>Buscar</button>
            </form>
        </div>
    );
}
