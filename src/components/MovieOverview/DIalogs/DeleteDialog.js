import React from 'react'
import { Dialog, DialogActions, DialogTitle, DialogContent, DialogContentText, Button } from '@material-ui/core'

export const DeleteDialog = ({ open, setOpen, selectedMovie, deleteMovie }) => {
    return (
        <Dialog
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{"Film verwijderen?"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Weet u zeker dat u deze film wilt verwijderen?
          </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setOpen(false)} color="primary">
                    Annuleren
          </Button>
                <Button onClick={() => {
                    selectedMovie && deleteMovie(selectedMovie._id)
                    setOpen(false)
                }} color="primary" autoFocus>
                    Verwijderen
          </Button>
            </DialogActions>
        </Dialog>
    )
}
