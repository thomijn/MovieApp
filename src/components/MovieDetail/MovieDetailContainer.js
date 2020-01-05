import React, { useEffect } from 'react'

import CanvasContainer from "../models/CanvasContainer"
import { MovieDetailComponent } from './MovieDetailComponent'
import { useHomeStore } from "../../store"
import Title from "./Title"

const MovieDetailContainer = () => {
    const { getMovies } = useHomeStore()
    const selectedMovie = useHomeStore(state => state.selectedMovie)
    const setSelectedMovie = useHomeStore(state => state.setSelectedMovie)

    useEffect(() => {
        getMovies("http://78.141.212.87:8000/movies")
    }, [])

    return (
        <div>
            <Title />
            <MovieDetailComponent selectedMovie={selectedMovie} setSelectedMovie={setSelectedMovie} />
            <CanvasContainer />
        </div>
    )
}

export default MovieDetailContainer;