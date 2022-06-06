import React from 'react';

export const Edit = ({
    movieId,
    movieName, 
    movieDescription, 
    getMovies, 
    setMovies,
    setEdit
}) => {
    const titleComponent = "Edit movie";

    const saveEdit = (e, id) => {
        e.preventDefault();
        const oldMovies = getMovies();
        const index = oldMovies.findIndex(movie => movie.id === id);
        let updatedMovie = {
            id,
            titleMovie: e.target.title.value,
            descriptionMovie: e.target.description.value
        };
        oldMovies[index] = updatedMovie;
        setMovies(oldMovies);
        localStorage.setItem('movies', JSON.stringify(oldMovies));
        setEdit(0);
    }

    return (
        <div>
            <h3 className="title">{ titleComponent }</h3>
            <form onSubmit={ e => saveEdit(e, movieId) }>
                <input 
                    type="text" 
                    name="title"
                    className="title"
                    defaultValue={ movieName }
                />
                <textarea 
                    name="description"
                    className="description"
                    defaultValue={ movieDescription }
                ></textarea>
                <input 
                    type="submit" 
                    value="Update"
                />
            </form>
        </div>
    );
}