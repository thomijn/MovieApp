import React from 'react'
import { Dialog, DialogActions, DialogTitle, DialogContent, Button, TextField, Grid } from '@material-ui/core'
import { useFormik } from 'formik';
import { validate } from '../../../helperfunctions/validation'

export const NewMovie = ({ open, setOpen, addMovie, editMovie, edit, movie, setEdit }) => {

    const formik = useFormik({
        initialValues: {
            title: edit ? movie.title : '',
            director: edit ? movie.director : '',
            year: edit ? movie.year : '',
            rating: edit ? movie.rating : '',
            imdbId: edit ? movie.imdbId : '',
        },
        validate,
        onSubmit: values => {
            !edit ? addMovie(values) : editMovie(values, movie)
            setOpen(false)
            setEdit(false)
        },
        enableReinitialize: true
    });

    return (
        <Dialog
            open={open}
            onClose={() => {
                setOpen(false)
                setEdit(false)
            }}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <form onSubmit={formik.handleSubmit} >
                <DialogTitle id="alert-dialog-title">{edit ? "Edit a movie" : "Add a movie"}</DialogTitle>
                <DialogContent>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <TextField
                                error={formik.errors.title ? true : false}
                                helperText={formik.errors.title}
                                fullWidth={true}
                                name="title"
                                label="Title"
                                variant="outlined"
                                onChange={formik.handleChange}
                                value={formik.values.title} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                error={formik.errors.director ? true : false}
                                fullWidth={true}
                                helperText={formik.errors.director}
                                name="director"
                                label="Director"
                                variant="outlined"
                                onChange={formik.handleChange}
                                value={formik.values.director} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                error={formik.errors.year ? true : false}
                                fullWidth={true}
                                helperText={formik.errors.year}
                                name="year"
                                label="Year"
                                variant="outlined"
                                onChange={formik.handleChange}
                                value={formik.values.year} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                error={formik.errors.rating ? true : false}
                                fullWidth={true}
                                helperText={formik.errors.rating}
                                name="rating"
                                label="Rating"
                                variant="outlined"
                                onChange={formik.handleChange}
                                value={formik.values.rating} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth={true}
                                name="imdbId"
                                label="IMDB Id"
                                variant="outlined"
                                onChange={formik.handleChange}
                                value={formik.values.imdbId} />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => {
                        setEdit(false)
                        setOpen(false)
                    }} color="primary">
                        Cancel
                     </Button>
                    <Button color="primary" type="submit" autoFocus>
                        {edit ? "edit" : "Add"}
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    )
}
