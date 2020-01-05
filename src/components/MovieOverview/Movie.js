import React, { useState } from 'react'
import { Card, CardContent, Grid, makeStyles, Typography, CardActionArea } from '@material-ui/core'
import { useSpring, a, config } from "react-spring"

const styles = makeStyles({
    card: {
        height: "100px",
        marginTop: "1em",
        marginBottom: "1em",
        opacity: "0.8"
    },
    text: {
        fontFamily: "Josefin Sans"
    }
});

const Movie = ({ movie, setSelectedMovie }) => {
    const classes = styles()
    const [hover, setHover] = useState(false)
    const hoverProps = useSpring({
        transform: hover ? "scale(1.025)" : "scale(1)",
        config: config.stiff
    })
    return (
        <a.div style={hoverProps}>
            <Card className={classes.card}>
                <CardActionArea onClick={() => setSelectedMovie(movie)} onPointerOver={() => setHover(true)} onPointerOut={() => setHover(false)} >
                    <Grid container alignItems="center">
                        <Grid item xs={2}>
                            <img src={`http://img.omdbapi.com/?apikey=d2962e67&i=${movie.imdbId}`} alt="movie poster" height="100" width="75" />
                        </Grid>
                        <Grid item xs={10}>
                            <CardContent>
                                <Grid container>
                                    <Grid item xs={12}>
                                        <Typography className={classes.text} variant="h6">{movie.title}</Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Grid>
                    </Grid>
                </CardActionArea>
            </Card>
        </a.div>
    )
}

export default Movie