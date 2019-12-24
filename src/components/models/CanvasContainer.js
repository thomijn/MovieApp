import React, { useEffect } from 'react'
import CanvasModel from './Canvas';
import { useStore } from "../../store"

const CanvasContainer = () => {
    const movies = useStore(state => state.movies)

    return (
        movies.length ? < CanvasModel movies={movies} /> : null
    )
}

export default CanvasContainer;