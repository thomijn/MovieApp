import React, { useEffect, useState } from 'react'
import Movie from './Movie'
import { Grid, makeStyles, Button } from '@material-ui/core'
import MovieSide from './MovieSide'
import Pagination from './Pagination'
import { a, config, useSpring } from "react-spring"
import { FiChevronLeft } from 'react-icons/fi'
import { GiPopcorn } from "react-icons/gi";
import { Link } from 'react-router-dom'
import { DeleteDialog } from './DIalogs/DeleteDialog'
import { NewMovie } from './DIalogs/NewMovie'

const styles = makeStyles({
    icon: {
        fontSize: "50pt"
    },
    popcornIcon: {
        fontSize: "20pt"
    }
})

const MovieOverviewComponent = ({ movies, selectedMovie, setSelectedMovie, pagination, deleteMovie, addMovie, editMovie }) => {
    const [reset, setReset] = useState(false)
    const [hover, setHover] = useState(false)
    const [edit, setEdit] = useState(false)
    const [hoverIcon, setHoverIcon] = useState(false)
    const [openDelete, setOpenDelete] = useState(false)
    const [openNew, setOpenNew] = useState(false)
    const classes = styles()
    const animatedProps = useSpring({
        from: { opacity: 0.5, transform: "translateY(1rem)" },
        to: { opacity: 1, transform: "translateY(0rem)" },
        config: config.default,
        reset: reset
    })
    const animatedIcon = useSpring({
        transform: hover ? "scale(1.25)" : "scale(1)"
    })
    const animatedIcon2 = useSpring({
        transform: hoverIcon ? "rotate(20deg)" : "rotate(0deg)"
    })
    useEffect(() => {
        setReset(true)
        setTimeout(() => {
            setReset(false)
        }, 500);
    }, [movies])
    return (
        <Grid container justify="center">
            <Grid item xs={8} style={{ marginTop: "1em" }}>
                <Grid alignItems="center" justify="space-between" container>
                    <Grid item xs={1}>
                        <a.div onPointerOver={() => setHover(true)} onPointerOut={() => setHover(false)} style={animatedIcon}>
                            <Link to="/">
                                <FiChevronLeft className={classes.icon} color="#fff" />
                            </Link>
                        </a.div>
                    </Grid>
                    <Grid style={{ marginRight: "1em" }} item xs={3}>
                        <Button variant="contained" onClick={() => setOpenNew(true)} onPointerOver={() => setHoverIcon(true)} onPointerOut={() => setHoverIcon(false)} fullWidth={true}>
                            <a.span style={animatedIcon2}>
                                <GiPopcorn className={classes.popcornIcon} />
                            </a.span>
                            Add movie
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={7} lg={5}>
                <a.div style={animatedProps}>
                    {movies && movies.map(movie => <Movie key={movie._id} setSelectedMovie={(movie) => setSelectedMovie(movie)} movie={movie} />)}
                </a.div>
                <Pagination pagination={pagination} />
            </Grid>
            <Grid item xs={7} lg={3}>
                <MovieSide setOpenNew={(open) => {
                    setOpenNew(open)
                    setEdit(true)
                }} setOpenDelete={(open) => setOpenDelete(open)} movie={selectedMovie} />
            </Grid>
            <DeleteDialog deleteMovie={(id) => deleteMovie(id)} selectedMovie={selectedMovie} open={openDelete} setOpen={(open) => setOpenDelete(open)} />
            <NewMovie setEdit={(open) => setEdit(open)} edit={edit} movie={selectedMovie} editMovie={(values, movie) => editMovie(values, movie)} addMovie={(values) => addMovie(values)} open={openNew} setOpen={(open) => setOpenNew(open)} />

        </Grid>
    )
}

export default MovieOverviewComponent