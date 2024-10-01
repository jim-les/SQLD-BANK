// LoginScreen.js
import React from 'react';
import { Box, Typography, TextField, Button, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { Colors } from '../utils';
import Grid from '@mui/material/Grid2';
import logo from '../assets/logo.png';

const LoginScreen = () => {
    const { username, setUsername, password, setPassword, login, error, loading } = useAppContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        login();
    };

    return (
        <Box>
            <Grid container>
                <Grid item xs={5}>
                    <Box backgroundColor={Colors.lighter} padding={20}>
                        <Box display={"flex"} alignItems={"center"}>
                            <img src={logo} alt="logo" style={{ width: '100px', height: '100px' }} />
                            <Typography variant="h5" fontWeight={800} color='primary'>SQLD</Typography>
                        </Box>
                        <Typography variant="h4" fontWeight={800}>Log In</Typography>

                        <Typography variant="h6" fontWeight={400} letterSpacing={1} paddingBottom={7} paddingTop={5}> Welcome back! Please enter your details.</Typography>

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
                                style={{ height: '50px' }}
                            >
                                {loading ? <CircularProgress size={24} color="inherit" /> : 'Login'}
                            </Button>

                            <Box display={"flex"} justifyContent={"center"} padding={7} letterSpacing={2}>
                                <Link to="/forgot-password" style={{ textDecoration: 'none', color: Colors.darker }}> Forgot password? </Link>
                                <Link to="/signup"> Register</Link>
                            </Box>
                        </form>
                    </Box>
                </Grid>

                <Grid item xs={7}>
                    <Box backgroundColor={Colors.light} width={'100%'} minHeight={'100vh'}>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default LoginScreen;
