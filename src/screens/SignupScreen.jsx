import React from 'react';
import { Box, Typography, TextField, Button, CircularProgress, useMediaQuery, useTheme } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import { Colors } from '../utils';
import { useAppContext } from '../context/AppContext';
import { BadgerWidget } from '../compontents/BadgerWidget';
import logo from '../assets/logo.png';

const SignupScreen = () => {
    const [email, setEmail] = React.useState('');
    const [firstname, setFirstname] = React.useState('');
    const [lastname, setLastname] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [dateofbirth, setDateofbirth] = React.useState('');
    const [ssn, setSsn] = React.useState('');
    const [password, setPassword] = React.useState('');
    const { Signup, error, loading } = useAppContext();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Detect mobile screens
    const handleSubmit = async (e) => {

        e.preventDefault();
        const data = {
            username: firstname,
            email,
            password,
            firstName: firstname,
            lastName: lastname,
            address,
            dateOfBirth: dateofbirth,
            ssn
        };
        Signup(data);
    };

    return (
        <Box>
            <BadgerWidget />
            <Grid container spacing={2} height='100vh'>
                <Grid item xs={12} md={6}>
                    <Box 
                        backgroundColor={Colors.light} 
                        padding={2} 
                        paddingTop={5} 
                        height='100vh'
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                    >
                        <Box display={"flex"} alignItems={"center"} paddingBottom={isMobile ? 5 : 10} justifyContent={isMobile ? 'center' : 'flex-start'}
                            onClick={() => window.location.href = '/'}
                        >
                            <img src={logo} alt="logo" style={{ width: '80px', height: '80px' }} />
                            <Typography variant={isMobile ? "h3" : "h1"} fontWeight={800} color='primary' style={{ marginLeft: isMobile ? 10 : 20 }}>SQLD</Typography>
                        </Box>
                        <Typography variant="h4" fontWeight={800}>Sign up</Typography>
                        <Typography variant="h6" fontWeight={400} paddingBottom={2} letterSpacing={1}>
                            Please Enter Your details
                        </Typography>

                        {error && <Typography color="error" variant="body2">{error}</Typography>}

                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        label="First Name"
                                        variant="outlined"
                                        fullWidth
                                        margin="normal"
                                        required
                                        value={firstname}
                                        onChange={(e) => setFirstname(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        label="Last Name"
                                        variant="outlined"
                                        fullWidth
                                        margin="normal"
                                        required
                                        value={lastname}
                                        onChange={(e) => setLastname(e.target.value)}
                                    />
                                </Grid>
                            </Grid>

                            <TextField
                                label="Address"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                required
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />

                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        label="Date of Birth"
                                        variant="outlined"
                                        fullWidth
                                        margin="normal"
                                        required
                                        value={dateofbirth}
                                        onChange={(e) => setDateofbirth(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        label="SSN"
                                        variant="outlined"
                                        fullWidth
                                        margin="normal"
                                        required
                                        value={ssn}
                                        onChange={(e) => setSsn(e.target.value)}
                                    />
                                </Grid>
                            </Grid>

                            <TextField
                                label="Email"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

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
                                disabled={loading}
                                style={{ height: '50px', marginTop: 2 }}
                            >
                                {loading ? <CircularProgress size={24} color="inherit" /> : 'Sign Up'}
                            </Button>
                        </form>

                        <Box display="flex" justifyContent="center" paddingTop={2}>
                            <Typography>Already have an account? </Typography>
                            <Link to="/login"> Login</Link>
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Box backgroundColor={Colors.light} width='100%' height='100vh'>
                        <img 
                            src="https://www.shutterstock.com/image-photo/business-financing-accounting-banking-concept-600nw-2267738379.jpg"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            alt="Signup Background" 
                        />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default SignupScreen;
