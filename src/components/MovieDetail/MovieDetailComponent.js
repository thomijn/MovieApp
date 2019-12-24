import React from 'react'
import { Card, Typography, Grid, makeStyles, CardContent, CardMedia, CardActions, IconButton } from '@material-ui/core';
import { FaTimes } from 'react-icons/fa';

import { useStore } from "../../store"
import { useSpring, a, config } from 'react-spring';

const styles = makeStyles({
    container: {
        zIndex: "2",
        margin: "2em",
        position: "absolute",
        bottom: "2em"
    },
    card: {
        width: "900px",
        height: "225px",
        opacity: "0.9"
    },
});

export const MovieDetailComponent = () => {
    const classes = styles()
    const selectedMovie = useStore(state => state.selectedMovie)
    const setSelectedMovie = useStore(state => state.setSelectedMovie)
    const props = useSpring({
        opacity: !selectedMovie ? 0 : 1,
        config: config.slow
    })
    return (
        <Grid justify="center" container>
            {selectedMovie &&
                <Grid className={classes.container} item xs={6}>
                    <a.div style={props}>
                        <Card className={classes.card} elevation={4}>
                            <Grid container alignItems="center">
                                <Grid item xs={3}>
                                    <img src={`http://img.omdbapi.com/?apikey=d2962e67&i=${selectedMovie.imdbId}`} height="225" width="auto" />
                                </Grid>
                                <Grid item xs={9}>
                                    <CardContent>
                                        <Grid container>
                                            <Grid item xs={8}>
                                                <Typography component="h2" variant="h3">
                                                    {selectedMovie.title}
                                                </Typography>
                                                <Typography variant="h5" color="textSecondary">
                                                    {selectedMovie.director}
                                                </Typography>
                                                <Typography variant="subtitle1" color="textSecondary">
                                                    {selectedMovie.year}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <Typography variant="h3">
                                                    {selectedMovie.rating}
                                                </Typography>


                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                    <IconButton style={{ position: "absolute", top: "0.5em", right: "0.5em" }} aria-label="add to favorites">
                                        <FaTimes onClick={() => setSelectedMovie(undefined)} />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </Card>
                    </a.div>
                </Grid>
            }
        </Grid>
    )
}
