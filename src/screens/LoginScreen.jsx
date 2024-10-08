import React from 'react';
import { Box, Typography, TextField, Button, CircularProgress, useMediaQuery, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { Colors } from '../utils';
import Grid from '@mui/material/Grid2';
import logo from '../assets/logo.png';

const LoginScreen = () => {
    const { username, setUsername, password, setPassword, login, error, loading } = useAppContext();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Detect mobile screens

    const handleSubmit = (e) => {
        e.preventDefault();
        login();
    };

    return (
        <Box>
            <Grid container direction={isMobile ? 'column-reverse' : 'row'}>
                {/* Left Section (Form) */}
                <Grid item xs={12} sm={5} md={5}>
                    <Box backgroundColor={Colors.lighter} padding={isMobile ? 5 : 20} textAlign={isMobile ? 'center' : 'left'}>
                        <Box display={"flex"} alignItems={"center"} paddingBottom={isMobile ? 5 : 10} justifyContent={isMobile ? 'center' : 'flex-start'}
                            onClick={() => window.location.href = '/'}
                        >
                            <img src={logo} alt="logo" style={{ width: '80px', height: '80px' }} />
                            <Typography variant={isMobile ? "h3" : "h1"} fontWeight={800} color='primary' style={{ marginLeft: isMobile ? 10 : 20 }}>SQLD</Typography>
                        </Box>

                        <Typography variant="h4" fontWeight={800} textAlign={'center'}>Log In</Typography>

                        <Typography variant="h6" fontWeight={400} letterSpacing={1} paddingBottom={5} paddingTop={3}> Welcome back! Please enter your details.</Typography>

                        {error && <Typography color="error" variant="body2">{error}</Typography>}

                        <form onSubmit={handleSubmit}>
                            <Typography variant="h6" fontWeight={800}>Username</Typography>
                            <TextField
                                label="Username"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                required
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />

                            <Typography variant="h6" fontWeight={800}>Password</Typography>
                            <TextField
                                label="Password"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                required
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            <Button 
                                variant="contained" 
                                color="primary" 
                                fullWidth 
                                type="submit" 
                                disabled={loading} // Disable button while loading
                                style={{ height: '50px', marginTop: '20px' }}
                            >
                                {loading ? <CircularProgress size={24} color="inherit" /> : 'Login'}
                            </Button>

                            <Box display={"flex"} justifyContent={"space-between"} padding={7} letterSpacing={2} flexDirection={isMobile ? 'column' : 'row'} alignItems={isMobile ? 'center' : 'flex-start'}>
                                <Link to="/forgot-password" style={{ textDecoration: 'none', color: Colors.darker, marginBottom: isMobile ? 10 : 0 }}> Forgot password? </Link>
                                <Link to="/signup" style={{ textDecoration: 'none', color: Colors.darker }}> Register</Link>
                            </Box>
                        </form>
                    </Box>
                </Grid>

                {/* Right Section (Image or Additional Content) */}
                {/* <Grid item xs={12} sm={7} md={5}>
                    <Box backgroundColor={Colors.light} width={'100%'} minHeight={isMobile ? '40vh' : '100vh'} display="flex" justifyContent="center" alignItems="center">
                        <Typography variant="h4" fontWeight={600} color="primary">Welcome to SQLD Bank</Typography>
                    </Box>
                </Grid> */}
            </Grid>
        </Box>
    );
}

export default LoginScreen;
