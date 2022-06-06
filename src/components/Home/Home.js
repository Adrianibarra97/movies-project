import React, { useState } from 'react';
import { Content } from './Content/Content';
import { Aside } from './Aside/Aside';
import './css/HomeStyle.css';

export const Home = () => {
  const [ movies, setMovies ] = useState([]);

  return (
    <div className="home">
        <Content movies={movies} setMovies={setMovies}/>
        <Aside movies={movies} setMovies={setMovies}/>
    </div>
  );
}