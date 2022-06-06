import React from 'react';
import { AddMovie } from './AddMovie/AddMovie';
import { Search } from './Search/Search';
import './css/AsideStyle.css';

export const Aside = ({ movies, setMovies }) => {
    return (
        <aside className="lateral">
            <Search movies={movies} setMovies={setMovies}/>
            <AddMovie setMovies={setMovies}/>
        </aside>
    );
}
