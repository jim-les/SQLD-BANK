import React from 'react';
import { Box, Typography, TextField, Container, Button } from '@mui/material';
import Grid from '@mui/material/Grid2';
// Import components
import { Link } from 'react-router-dom';
import { Colors } from '../utils';
import { useAppContext } from '../context/AppContext';
import CircularProgress from '@mui/material/CircularProgress';
import { BadgerWidget } from '../compontents/BadgerWidget';

const SignupScreen = () => {
    // State variables for user details
    const [email, setEmail] = React.useState('user@example.com');
    const [firstname, setFirstname] = React.useState('user');
    const [lastname, setLastname] = React.useState('user');
    const [address, setAddress] = React.useState('123 Main St');
    const [dateofbirth, setDateofbirth] = React.useState('1990-01-01');
    const [ssn, setSsn] = React.useState('123-45-6789');
    const [password, setPassword] = React.useState('password123'); // Example default password
    const { Signup, error, loading } = useAppContext();

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission
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
    }

    return (
        <Box>
            <BadgerWidget />
            <Grid container spacing={2} maxHeight={'100vh'} overflow={'hidden'}>
                <Grid item xs={12} md={5}>
                    <Box 
                        backgroundColor={Colors.light} 
                        paddingLeft={2} 
                        paddingRight={2} 
                        paddingTop={5} 
                        overflow={'scroll'} 
                        height={'100vh'}
                    >
                        <Typography variant="h5" fontWeight={800} paddingBottom={5} color='primary'>SQLD</Typography>
                        <Typography variant="h4" fontWeight={800}>Sign up</Typography>
                        <Typography variant="h6" fontWeight={400} paddingBottom={2} paddingTop={2} letterSpacing={2}>
                            Please Enter Your details
                        </Typography>

                        {error && <Typography color="error" variant="body2">{error}</Typography>}

                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <Typography variant="h6" fontWeight={800}>First Name</Typography>
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
                                    <Typography variant="h6" fontWeight={800}>Last Name</Typography>
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

                            {/* Address */}
                            <Typography variant="h6" fontWeight={800}>Address</Typography>
                            <TextField
                                label="Address"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                required
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />

                            {/* Date of Birth and SSN */}
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <Typography variant="h6" fontWeight={800}>Date of Birth</Typography>
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
                                    <Typography variant="h6" fontWeight={800}>SSN</Typography>
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

                            {/* Email and Password */}
                            <Typography variant="h6" fontWeight={800}>Email</Typography>
                            <TextField
                                label="Email"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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
                            <br />
                            <br />
                            <Button 
                                variant="contained" 
                                color="primary" 
                                fullWidth 
                                type="submit" 
                                disabled={loading} // Disable button while loading
                                style={{ height: '50px' }}
                            >
                                {loading ? <CircularProgress size={24} color="inherit" /> : 'Sign Up'}
                            </Button>
                        </form>

                        {/* Forgot password */}
                        <Box display={"flex"} justifyContent={"center"} padding={1} letterSpacing={2}>
                            <Typography>Already have an account? </Typography>
                            <Link to="/login"> Login</Link>
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={12} md={7}>
                    <Box backgroundColor={Colors.light} width={'100%'} minHeight={'100vh'}>
                        <img 
                            src="https://www.shutterstock.com/image-photo/business-financing-accounting-banking-concept-600nw-2267738379.jpg"
                            style={{ width: '100%', minHeight: '100vh', objectFit: 'cover' }}
                            alt="Signup Background" 
                        />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default SignupScreen;
