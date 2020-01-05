import React, { useEffect } from 'react'
import { useAppStore, useHomeStore } from '../../store';

import MovieOverviewComponent from './MovieOverviewComponent';
// import { topThree } from '../../helperfunctions/action';

const MovieOverviewContainer = () => {
    const {
        getMoviesPaginated,
        pagination,
        movies,
        selectedMovie,
        setSelectedMovie,
        deleteMovie,
        addMovie,
        editMovie
    } = useAppStore()

    // const allMovies = useHomeStore(state => state.movies)
    const getAllMovies = useHomeStore(state => state.getMovies)

    useEffect(() => {
        getAllMovies(`http://78.141.212.87:8000/movies`)
        getMoviesPaginated(`http://78.141.212.87:8000/movies${pagination}`)
        // allMovies && allMovies.length && setTopThree(topThree(allMovies))
    }, [pagination])
    return (
        <MovieOverviewComponent
            pagination={movies.pagination} movies={movies.items}
            selectedMovie={selectedMovie}
            editMovie={(values, movie) => editMovie(values, movie)}
            addMovie={(data) => addMovie(data)}
            deleteMovie={id => deleteMovie(id)}
            setSelectedMovie={(movie) => setSelectedMovie(movie)} />
    )
}

export default MovieOverviewContainer;