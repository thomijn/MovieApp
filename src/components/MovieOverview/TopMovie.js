import React from 'react'
import { Card, CardMedia } from '@material-ui/core'

const TopMovie = ({ movie }) => {
    return (
        <Card>
            <CardMedia image={`http://img.omdbapi.com/?apikey=d2962e67&i=${movie.imdbId}`} />
        </Card>
    )
}

export default TopMovie