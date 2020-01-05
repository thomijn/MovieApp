import React from 'react'
import { Grid, Button, makeStyles, ButtonGroup, CardContent, Card } from '@material-ui/core'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"
import { useAppStore } from '../../store';

const styles = makeStyles({
    button: {
        width: "150px"
    },
    card: {
        opacity: 0.8
    }
});

const Pagination = ({ pagination }) => {
    const { getMoviesPaginated } = useAppStore()
    const classes = styles()
    return (
        <div>
            {pagination &&
                <Card className={classes.card}>
                    <CardContent style={{ paddingBottom: "1em" }}>
                        <Grid container justify="space-between">
                            <Grid item xs={2}>
                                <Button className={classes.button} onClick={() => getMoviesPaginated(pagination._links.first.href)} variant="contained" color="primary">First</Button>
                            </Grid>
                            <Grid item xs={8}>
                                <Grid container justify="center">
                                    <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                                        <Button disabled={pagination.currentPage === 1} onClick={() => getMoviesPaginated(pagination._links.previous.href)}><FaArrowLeft /></Button>
                                        <Button>{pagination.currentPage}</Button>
                                        <Button disabled={pagination.totalPages === pagination.currentPage} onClick={() => getMoviesPaginated(pagination._links.next.href)}><FaArrowRight /></Button>
                                    </ButtonGroup>
                                </Grid>
                            </Grid>
                            <Grid item xs={2}>
                                <Grid container justify="flex-end">
                                    <Button className={classes.button} onClick={() => getMoviesPaginated(pagination._links.last.href)} variant="contained" color="primary">Last</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            }
        </div>
    )
}

export default Pagination
