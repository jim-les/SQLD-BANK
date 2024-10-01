import React from 'react';
import { Box, Typography, TextField, Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useAppContext } from '../context/AppContext';

const AddBankCard = () => {
    const { isBankCardOpen, toggleSidebar  } = useAppContext();

    return (
        <Box
            sx={{
                position: 'fixed',
                top: 0,
                right: 0,
                width: isBankCardOpen ? '300px' : '0',
                height: '100%',
                bgcolor: 'background.default',
                transition: 'width 0.3s',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
                overflow: 'hidden',
                padding: isBankCardOpen ? '16px' : '0',
            }}
        >
            {isBankCardOpen && (
                <>
                    <IconButton onClick={toggleSidebar} sx={{ position: 'absolute', top: 16, right: 16 }}>
                        <CloseIcon />
                    </IconButton>
                    <Typography variant="h6">Add Bank Card</Typography>
                    <TextField fullWidth label="Card Number" margin="normal" />
                    <TextField fullWidth label="Card Holder Name" margin="normal" />
                    <TextField fullWidth label="Expiration Date" margin="normal" />
                    <TextField fullWidth label="CVV" margin="normal" />
                    <TextField fullWidth label="Billing Address" margin="normal" />
                    <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                        Submit
                    </Button>
                </>
            )}
        </Box>
    );
};

export default AddBankCard;
