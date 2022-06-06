import React from 'react';
import { AddMovie } from './AddMovie/AddMovie';
import { Search } from './Search/Search';
import './css/AsideStyle.css';

export const Aside = ({setMovies}) => {
    return (
        <aside className="lateral">
            <Search/>
            <AddMovie setMovies={setMovies}/>
        </aside>
    );
}
