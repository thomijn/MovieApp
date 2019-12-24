import React, { useEffect } from 'react'

import { MovieDetailComponent } from './MovieDetailComponent'
import { useStore } from "../../store"

const MovieDetailContainer = () => {
    const { getMovies } = useStore()

    useEffect(() => {
        getMovies("http://78.141.212.87:8000/movies")
    }, [])

    return (
        <MovieDetailComponent />
    )
}

export default MovieDetailContainer;