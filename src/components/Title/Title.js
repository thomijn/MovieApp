import React from 'react'
import { Grid, Typography, makeStyles } from '@material-ui/core'
import { a, config, useSpring } from "react-spring"
import { useStore } from "../../store"

const styles = makeStyles({
    container: {
        position: "absolute",
        top: "6em"
    },
    text: {
        color: "#c2c2c2",
        textAlign: "center",
        fontFamily: 'Josefin Sans',
        fontWeight: "800",
        fontSize: "10em"
    }
});


const Title = () => {
    const selectedMovie = useStore(state => state.selectedMovie)
    const classes = styles()
    const props = useSpring({
        from: {
            opacity: 0
        },
        opacity: 1,
        transform: !selectedMovie ? 'translateY(0px)' : 'translateY(-430px)',
        config: config.slow
    })
    return (
        <Grid container className={classes.container}>
            <Grid item xs={12}>
                <a.div style={props}>
                    <Typography className={classes.text} variant="h1">CLICK ON <br></br> A POPCORN</Typography>
                </a.div>
            </Grid>
        </Grid>
    )
}

export default Title