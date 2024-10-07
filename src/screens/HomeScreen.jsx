import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import logo from '../assets/logo.png';

const HomeScreen = () => {
    return (
        <Box>
            {/* AppBar with title and navigation links */}
            <AppBar position="static">
                <Toolbar style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'white', padding: '20px 15%' }}>
                    {/* Title */}
                    <img src={logo} alt="logo" style={{ width: '100px', height: '100px' }} />
                    <Typography variant="h3" style={{ flexGrow: 1, color: 'black', fontWeight: '800' }}>
                        SQLD BANK
                    </Typography>
                    {/* Navigation Links */}
                    <Button color="primary" variant="contained" href="/login"> Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default HomeScreen;
