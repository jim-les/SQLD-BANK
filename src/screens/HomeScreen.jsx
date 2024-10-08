import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, useMediaQuery, IconButton, Drawer, List, ListItem, ListItemText, Grid2 as Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu'; // Hamburger menu icon
import logo from '../assets/logo.png';
import OurServices from '../compontents/OurServices';
import AboutUs from '../compontents/AboutUs';
import FeatureSystems from '../compontents/FeatureSystems';
import Footer from '../compontents/Footer';
import bankCard from '../assets/bankCardBg.png';
import pig from '../assets/pig.png';

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
                        <img src={logo} alt="logo" style={{ width: isMobile ? '50px' : '100px', height: isMobile ? '50px' : '100px' }} />

                        {/* Title */}
                        <Typography
                            variant={isMobile ? 'h6' : 'h3'}
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
                            <Button color="primary" style={{ fontSize: 16 }}>Home</Button>
                            <Button color="primary" style={{ fontSize: 16 }}>About</Button>
                            <Button color="primary" style={{ fontSize: 16 }}>Contact</Button>
                        </Box>
                    )}

                    {!isMobile && (
                        <Box display="flex" gap={2}>
                            <Button color="primary" variant="outlined" href="/login" style={{ fontSize: isMobile ? 14 : 20 }}>Login</Button>
                            <Button color="primary" variant="contained" href="/login" style={{ fontSize: isMobile ? 14 : 20 }}>Signup</Button>
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
            <Box>
                <Box 
                    style={{
                        backgroundImage: `url(https://www.gentledentistrytampa.com/wp-content/uploads/2021/07/bg-24.jpg)`,
                        padding: '20px 5%',
                        height: isMobile ? '40vh' : '70vh',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    <Grid container display={"flex"} alignItems={"center"}>
                        <Grid item xs={12} sm={4} />
                        <Grid item xs={12} sm={8}>
                            <Box 
                                style={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                    padding: isMobile ? '10px 5%' : '20px 10%',
                                    borderRadius: 30,
                                    margin: isMobile ? 10 : 20,
                                    minHeight: isMobile ? '20vh' : '40vh'
                                }}>
                                    <Typography variant={isMobile ? 'h4' : 'h2'} fontWeight={700} paddingTop={isMobile ? 2 : 10} color="primary">
                                        Welcome to SQLD Bank
                                    </Typography>
                                    <Typography variant={isMobile ? 'h6' : 'h5'} paddingTop={2} color='gray'>
                                        <b>Create the banking experience that fits your needs</b>
                                    </Typography>
                                </Box>
                        </Grid>
                    </Grid>
                </Box>
            
                <Box 
                    backgroundColor="#f5f5f5"
                    style={{    
                        padding: isMobile ? '10px 5%' : '20px 10%',
                    }}
                >
                    {/* Featured Systems */}
                    <FeatureSystems />
                </Box>

                <Box 
                    style={{
                        padding: isMobile ? '10px 2%' : '20px 10%',
                        backgroundColor: 'white',
                        backgroundImage: `url(https://png.pngtree.com/thumb_back/fh260/background/20230322/pngtree-online-banking-concept-with-the-businessman-online-banking-concept-with-businessman-photo-image_2078521.jpg)`,
                        minHeight: isMobile ? '50vh' : '90vh',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundAttachment: 'fixed',
                    }}
                >
                    {/* Our Services */}
                    <OurServices />
                </Box>

                {/* About Us */}
                <AboutUs />

                <Box paddingX={2}>
                    <Grid container>    
                        {!isMobile && (
                            <Grid xs={12} sm={12} md={6}>
                                <img src={bankCard} alt="" style={{ width: '80%' }}/>
                            </Grid>
                        )}
                        <Grid xs={12} sm={12} md={6}>
                            <Typography variant={isMobile ? 'h5' : 'h4'} fontWeight={800} color="primary" paddingTop={isMobile ? 5 : 10}> Checking Account</Typography>
                            <Typography variant={isMobile ? 'body1' : 'h6'} fontWeight={400} color="gray" paddingTop={2}> Open a checking account with SQLD Bank and enjoy the benefits of a secure and convenient banking experience.</Typography>

                            <List style={{paddingTop: 10}}>
                                <ListItem> &gt; eChecking Plus – An interest-bearing account for individuals who prefer to bank electronically.</ListItem>
                                <ListItem> &gt; Advantage Plus Checking – Our club account for individuals under the age of 50 that includes exclusive member benefits.</ListItem>
                                <ListItem> &gt; Horizons Club Gold Checking – Our club account for individuals age 50 or better that includes exclusive member benefits.</ListItem>
                            </List>
                        </Grid>

                        {isMobile && (
                            <Grid xs={12} sm={12} md={6}>
                                <img src={bankCard} alt="" style={{ width: '80%' }}/>
                            </Grid>
                        )}

                        <Grid xs={12} sm={12} md={6}>
                            <Typography variant={isMobile ? 'h5' : 'h4'} fontWeight={800} color="primary" paddingTop={isMobile ? 5 : 10}> Savings</Typography>
                            <Typography variant={isMobile ? 'body1' : 'h6'} fontWeight={400} color="gray" paddingTop={2}> It doesn’t matter whether you have short term or long-term goals, we make it easy to save money, with a variety of options to fit your needs.</Typography>

                            <List style={{paddingTop: 10}}>
                                <ListItem> &gt; Personal – Our traditional account for saving money.</ListItem>
                                <ListItem> &gt; Future Savers – A savings account uniquely designed for individuals under the age of 18.</ListItem>
                                <ListItem> &gt; Certificate of Deposit – An account with steady, secure fund growth for a fixed time period.</ListItem>
                            </List>
                        </Grid>

                        <Grid xs={12} sm={12} md={6}>
                            <img src={pig} alt="" style={{ width: '80%' }}/>
                        </Grid>
                    </Grid>
                </Box>
                
                {/* Footer */}
                <Footer />
            </Box>
        </Box>
    );
}

export default HomeScreen;
