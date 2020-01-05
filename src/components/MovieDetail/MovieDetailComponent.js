import React, { useEffect } from 'react'
import { Card, Typography, Grid, makeStyles, CardContent, CardHeader, Button, IconButton } from '@material-ui/core';
import { FaTimes } from 'react-icons/fa';
import { Link, useParams } from "react-router-dom"
import { useSpring, a, config } from 'react-spring';
import axios from 'axios';
import { toast } from "react-toastify"

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
    link: {
        color: "#fff",
        textAlign: "center"
    }
});

export const MovieDetailComponent = ({ setSelectedMovie, selectedMovie }) => {
    const classes = styles()
    const props = useSpring({
        opacity: !selectedMovie ? 0 : 1,
        config: config.slow
    })
    const buttonAnimated = useSpring({
        opacity: selectedMovie ? 0 : 1,
        config: config.slow
    })
    const { id } = useParams()

    useEffect(() => {
        if (id) {
            getMovie(`http://78.141.212.87:8000/movies/${id}`)
        }

    }, [id])

    const getMovie = async (url) => {
        try {
            const response = await axios.get(url)
            setSelectedMovie(response.data)
        } catch (error) {
            toast.error("Something went wrong")
        }
    }

    return (
        <Grid justify="center" container>
            <Grid item xs={6} className={classes.container}>
                <a.div style={buttonAnimated} >
                    <Button>
                        <Link style={{ textDecoration: "none", fontFamily: "Josefin Sans" }} to="/overview">
                            <Typography className={classes.link} variant="body1">Show all movies</Typography>
                        </Link>
                    </Button>
                </a.div>
            </Grid>
            {selectedMovie &&
                <Grid className={classes.container} item xs={6}>
                    <a.div style={props}>
                        <Card className={classes.card} elevation={4}>
                            <Grid container alignItems="center">
                                <Grid item xs={3}>
                                    <img src={`http://img.omdbapi.com/?apikey=d2962e67&i=${selectedMovie.imdbId}`} alt="movie poster" height="225" width="auto" />
                                </Grid>
                                <Grid item xs={8}>
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
                                            <Grid item xs={3}>
                                                <Typography variant="h3">
                                                    {selectedMovie.rating}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Grid>
                                <Grid item xs={1}>
                                    <CardHeader
                                        action={
                                            <IconButton onClick={() => setSelectedMovie(undefined)} aria-label="settings">
                                                <FaTimes />
                                            </IconButton>
                                        }
                                    />
                                </Grid>
                            </Grid>
                        </Card>
                    </a.div>
                </Grid>
            }
        </Grid>
    )
}
