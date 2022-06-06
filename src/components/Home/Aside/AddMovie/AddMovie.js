import React, { useState } from 'react';
import { SaveInStorage } from './helpers/SaveInStorage';

export const AddMovie = ({setMovies}) => {
    const title = "Add movie";
    const [ movie, setMovie ] = useState({
        titleMovie: '',
        descriptionMovie: ''
    });
    const { titleMovie, descriptionMovie } = movie;

    const getNewMovieData = (e) => {
        e.preventDefault();
        let newMovie = {
            id: new Date().getTime(),
            titleMovie: e.target.title.value,
            descriptionMovie: e.target.description.value
        };
        setMovie(newMovie);
        SaveInStorage("movies", newMovie);
        setMovies((elements) => {
            return [...elements, newMovie];
        });
    }

    return (
        <div className="add">
            <h3 className="title">{ title }</h3>
            <strong>
                { (titleMovie && descriptionMovie) && "you have created: " + titleMovie}
            </strong>
            <form onSubmit={ getNewMovieData }>
                <input 
                    type="text" 
                    placeholder="Titulo"
                    name="title"
                />
                <textarea 
                    placeholder="Descripcion"
                    name="description"
                ></textarea>
                <input 
                    type="submit" 
                    value="Guardar"
                />
            </form>
        </div>
    );
}