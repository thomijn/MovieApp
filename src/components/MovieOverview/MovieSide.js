import React, { useEffect, useState } from 'react'
import { Card, CardContent, Typography, Grid, makeStyles, Button } from '@material-ui/core'
import Rating from '@material-ui/lab/Rating';
import { FaFilm, FaEdit, FaTrash } from 'react-icons/fa';
import { useSpring, a } from 'react-spring';

const styles = makeStyles({
    card: {
        height: "564px",
        margin: "1em",
        opacity: "0.8"
    },
    text: {
        fontFamily: "Josefin Sans",
    },
    icon: {
        fontSize: "100px",
        color: "#b0b0b0",
    },
    actionButton: {
        width: "100%"
    }
});

const MovieSide = ({ movie, setOpenDelete, setOpenNew }) => {
    const classes = styles()
    const [reset, setReset] = useState(false)
    useEffect(() => {
        setReset(true)
        setTimeout(() => {
            setReset(false)
        }, 500);
    }, [movie])
    const animatedProps = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, reset: reset })
    return (
        <Card className={classes.card}>
            <a.div style={animatedProps}>
                <CardContent style={{ height: "100%" }}>
                    {movie ?
                        <Grid container alignItems="center">
                            <Grid item xs={6}>
                                <img src={`http://img.omdbapi.com/?apikey=d2962e67&i=${movie.imdbId}`} alt="movie poster" height="200" />
                            </Grid>
                            <Grid item xs={6}>
                                <Grid container direction="column">
                                    <Grid item md={12} lg={6}>
                                        <span style={{ fontSize: "40pt", verticalAlign: "center" }} className={classes.text} >{movie.rating}</span>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Rating size="small" name="read-only" max={10} value={parseFloat(movie.rating)} precision={0.5} readOnly />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} style={{ marginTop: "2em" }}>
                                <Grid container>
                                    <Grid item xs={3}><Typography className={classes.text} variant="h6">Title:</Typography></Grid><Grid item xs={8}><Typography style={{ color: "#919191" }} className={classes.text} variant="h6">{movie.title}</Typography></Grid>
                                    <Grid item xs={3}><Typography className={classes.text} variant="h6">Director:</Typography></Grid><Grid item xs={8}><Typography style={{ color: "#919191" }} className={classes.text} variant="h6">{movie.director}</Typography></Grid>
                                    <Grid item xs={3}><Typography className={classes.text} variant="h6">Year:</Typography></Grid><Grid item xs={8}><Typography style={{ color: "#919191" }} className={classes.text} variant="h6">{movie.year}</Typography></Grid>
                                </Grid>
                            </Grid>
                            <Grid style={{ marginTop: "155px" }} container spacing={2} justify="space-between">
                                <Grid item xs={6}>
                                    <Button onClick={() => setOpenNew(true)} color="primary" variant="contained" className={classes.actionButton}><FaEdit style={{ marginRight: "10px" }} />Edit</Button>
                                </Grid>
                                <Grid item xs={6}>
                                    <Button onClick={() => setOpenDelete(true)} color="primary" variant="contained" className={classes.actionButton}><FaTrash style={{ marginRight: "10px" }} />Delete</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        :
                        <Grid container style={{ height: "100%" }}>
                            <Grid container alignItems="center" justify="center">
                                <Grid style={{ textAlign: "center" }} item xs={12}>
                                    <span><FaFilm className={classes.icon} /></span>
                                    <Typography className={classes.text} style={{ color: "gray", fontWeight: "400" }} variant="h6">NO MOVIE SELECTED</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    }
                </CardContent >
            </a.div>
        </Card >
    )
}

export default MovieSide
