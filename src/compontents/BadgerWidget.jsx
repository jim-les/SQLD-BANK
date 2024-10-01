import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useAppContext } from '../context/AppContext';

export const BadgerWidget = () => {
    const { open, setOpen, message } = useAppContext();

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') return;
        setOpen(false);
    };
    return (
        <Snackbar open={open} autoHideDuration={10000} onClose={handleClose} 
            style={{ position: 'fixed', top: '-90%', left: '50%', width: '50%' }}>
            <Alert onClose={handleClose} severity={message.severity} sx={{ width: '100%' }}>
                {message.text}
            </Alert>
        </Snackbar> 
    )
}
