import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, useMediaQuery, IconButton, Drawer, List, ListItem, ListItemText, Grid2 as Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu'; // Hamburger menu icon
import logo from '../assets/logo.png';

const HomeScreen = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Detect mobile screen

    const [drawerOpen, setDrawerOpen] = useState(false); // Drawer state

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    const drawer = (
        <Box
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
            style={{ width: 250 }}
        >
            <List>
                <ListItem button>
                    <ListItemText primary="Home" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="About" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Contact" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Login" />
                </ListItem>
            </List>
        </Box>
    );

    return (
        <Box>
            <AppBar position="static">
                <Toolbar
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        backgroundColor: 'white',
                        padding: isMobile ? '10px 5%' : '20px 15%',
                    }}
                >
                    {/* Logo */}
                    <Box display="flex" gap={2} alignItems="center">
                        <img src={logo} alt="logo" style={{ width: isMobile ? '70px' : '100px', height: isMobile ? '70px' : '100px' }} />

                        {/* Title */}
                        <Typography
                            variant={isMobile ? 'h5' : 'h3'}
                            style={{
                                color: 'black',
                                fontWeight: '800',
                            }}
                        >
                            SQLD BANK
                        </Typography>
                    </Box>

                    {/* Show navigation links on large screens */}
                    {!isMobile && (
                        <Box display="flex" gap={3}>
                            <Button color="primary" style={{ fontSize: 20 }}>Home</Button>
                            <Button color="primary" style={{ fontSize: 20 }}>About</Button>
                            <Button color="primary" style={{ fontSize: 20 }}>Contact</Button>
                            <Button color="primary" variant="outlined" href="/login" style={{ fontSize: 20 }}>Login</Button>
                        </Box>
                    )}

                    {/* Hamburger menu for mobile */}
                    {isMobile && (
                        <IconButton
                            edge="start"
                            color="dark"
                            aria-label="menu"
                            onClick={toggleDrawer(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                    )}
                </Toolbar>
            </AppBar>

            {/* Drawer for mobile */}
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                {drawer}
            </Drawer>

            {/* Main content */}
            <Box style={{padding: '20px 10%'}}>
                <Grid container display={"flex"} alignItems={"center"}>
                    <Grid item size={6}>
                        <Typography variant="h1" fontWeight={800} padding={5} color="primary">
                            Welcome to SQLD <br /> Bank
                        </Typography>

                        <Typography variant="h4" padding={5}>
                            <b>Your trusted partner for all your financial needs</b>
                        </Typography>
                        <Typography variant="h4" padding={5}>
                            Your trusted partner for all your financial needs
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default HomeScreen;
