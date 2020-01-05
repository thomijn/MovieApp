import React from 'react'
import CanvasModel from './Canvas';
import { useHomeStore } from "../../store"

const CanvasContainer = () => {
    const movies = useHomeStore(state => state.movies)

    return (
        movies.length ? < CanvasModel movies={movies} /> : null
    )
}

export default CanvasContainer;