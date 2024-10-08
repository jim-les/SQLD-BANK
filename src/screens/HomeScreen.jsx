import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, useMediaQuery, IconButton, Drawer, List, ListItem, ListItemText, Grid2 as Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu'; // Hamburger menu icon
import logo from '../assets/logo.png';
import OurServices from '../compontents/OurServices';
import AboutUs from '../compontents/AboutUs';
import FeatureSystems from '../compontents/FeatureSystems';
import Footer from '../compontents/Footer';

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
                        padding: isMobile ? '10px 5%' : '20px 5%',
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
                        <div>
                            <Box display="flex" gap={3}>
                                <Button color="primary" style={{ fontSize: 16 }}>Home</Button>
                                <Button color="primary" style={{ fontSize: 16 }}>About</Button>
                                <Button color="primary" style={{ fontSize: 16 }}>Contact</Button>
                            </Box>
                        </div>
                    )}
                    <div style={{display: 'flex', gap: 20}}>
                        <Button color="primary" variant="outlined" href="/login" style={{ fontSize: 20 }}>Login</Button>
                        <Button color="primary" variant="contained" href="/login" style={{ fontSize: 20 }}>Signup</Button>
                    </div>

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
            <Box style={{
                
            }}>
                <div 
                    style={{
                        backgroundImage: `url(https://www.gentledentistrytampa.com/wp-content/uploads/2021/07/bg-24.jpg)`,
                        padding: '20px 5%',
                        height: '70vh',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    <Grid container display={"flex"} alignItems={"center"}>
                        <Grid item size={4}/>
                        <Grid item size={8}>
                            <div 
                                style={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                    padding: '20px 10%',
                                    borderRadius: 30,
                                    margin: 20,
                                    minHeight: '40vh'
                                }}>
                                    <Typography variant="h2" fontWeight={700} paddingTop={10} color="primary">
                                        Welcome to SQLD Bank
                                    </Typography>

                                    <Typography variant="h5" paddingTop={2} color='gray'>
                                        <b>Create the banking experience that fits your needs</b>
                                    </Typography>

                                </div>
                        </Grid>
                    </Grid>
                </div>
            
            <Box 
                backgroundColor="#f5f5f5"
                style={{    
                    padding: '20px 10%',
                }}
            >
                {/* Featured Systems */}
                <FeatureSystems />

            </Box>

                

            </Box>

            <div 
                style={{
                    padding: '20px 10%',
                    backgroundColor: 'white',
                    backgroundImage: `url(https://png.pngtree.com/thumb_back/fh260/background/20230322/pngtree-online-banking-concept-with-the-businessman-online-banking-concept-with-businessman-photo-image_2078521.jpg)`,
                    height: '90vh',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundAttachment: 'fixed',
                }}
            >

                    {/* our Services */}
                    <OurServices />
            </div>


            {/* About Us */}
            <AboutUs />

            <Box paddingX={20}>
                <Grid container>    
                    <Grid item size={6}>
                        <img src="https://mabreybank.s3.us-west-2.amazonaws.com/wp-content/uploads/2020/02/13044126/home-about-img.svg" alt="" />
                    </Grid>
                    <Grid item size={6}>
                        <Typography variant="h4" fontWeight={800} color="primary" paddingTop={10}> Checking Account</Typography>
                        <Typography variant="h6" fontWeight={400} color="gray" paddingTop={2}> Open a checking account with SQLD Bank and enjoy the benefits of a secure and convenient banking experience.</Typography>

                        <List style={{paddingTop: 10}}>
                            <ListItem> &gt; eChecking Plus – An interest-bearing account for individuals who prefer to bank electronically.</ListItem>
                            <ListItem> &gt; Advantage Plus Checking – Our club account for individuals under the age of 50 that includes exclusive member benefits..</ListItem>
                            <ListItem> &gt; Horizons Club Gold Checking – Our club account for individuals age 50 or better that includes exclusive member benefits.</ListItem>
                            <ListItem> &gt; eChecking Plus – An interest-bearing account for individuals who prefer to bank electronically.</ListItem>
                            <ListItem> &gt; Advantage Plus Checking – Our club account for individuals under the age of 50 that includes exclusive member benefits..</ListItem>
                            <ListItem> &gt; Horizons Club Gold Checking – Our club account for individuals age 50 or better that includes exclusive member benefits.</ListItem>
                        </List>
                    </Grid>
                </Grid>
            </Box>
            
            {/* Footer */}
            <Footer />


        </Box>
    );
}

export default HomeScreen;
