import React from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Wifi } from '@mui/icons-material';
import { Colors } from '../../utils';

// Define keyframes for jumping animation
const jumpingAnimation = {
    '@keyframes jump': {
        '0%': { transform: 'translateY(-40px)' },
        '50%': { transform: 'translateY(-50px)' }, // Adjust the value for height of jump
        '100%': { transform: 'translateY(-40px)' },
    },
};

const EndContainer = () => {
    return (
        <Box paddingLeft={5}>
            <Box 
                sx={{
                    background: 'linear-gradient(to bottom right, aqua 0%, pink 60%)',
                    width: '100%',
                    height: '200px',
                    borderRadius: '20px 30px 5px 20px'
                }}
            />

            {/* Circular Box with jumping animation */}
            <Box 
                sx={{
                    ...jumpingAnimation,
                    background: 'linear-gradient(to bottom right, aqua 0%, blue 50%, pink 100%)',
                    width: '100px',
                    height: '120px',
                    borderRadius: '50%',
                    transform: 'translateY(-50%) translateX(-20%)',
                    marginLeft: '50px',
                    animation: 'jump 1s infinite', // Add the animation here
                }}
            />

            {/* Current user name */}
            <Typography variant="h5" fontWeight={800} marginTop={5} color={Colors.darker}>John Doe</Typography>

            {/* My Bank and add banks btn */}
            <Box display="flex" justifyContent={'space-between'} alignItems="center" gap={2} marginTop={5}>
                <Typography variant="h6" color={Colors.black} fontWeight={600}>My Banks</Typography>
                <Button variant="contained" color="primary">Add Bank</Button>
            </Box>

            {/* Create to paper overlapping to show cards */}
            <Box
                sx={{
                    position: 'relative',
                    marginTop: 5,
                }}
            >
                <Paper
                    sx={{
                        width: '90%',
                        height: '200px',
                        borderRadius: '30px 30px 30px 30px',
                        marginTop: 5,
                        position: 'absolute',
                        overflow: 'hidden',
                        top: 0,
                        left: 0,
                        zIndex: 10, 
                    }}
                >
                    <Grid container minHeight={'100%'} >
                        <Grid size={9} padding={2} backgroundColor={Colors.dark}>
                            <Typography variant="h6" color={Colors.lighter}>Bank Name</Typography>
                            <Typography variant="h6" color={Colors.lighter}
                                sx={{
                                    position: 'absolute',
                                    bottom: 10,
                                }}
                            >1234 5678 9876 5432</Typography>
                        </Grid>
                        <Grid size={3} padding={2} textAlign={'right'} minHeight={'100%'} sx={{ background: 'linear-gradient(to bottom right, pink 0%, aqua 50%, pink 100%)' }}>
                            <Wifi
                                sx={{
                                    color: Colors.white,
                                    fontSize: 40,
                                    transform: 'rotate(90deg)',
                                }}
                            />
                        </Grid>
                    </Grid>
                </Paper>

                <Paper
                    sx={{
                        width: '90%',
                        height: '200px',
                        borderRadius: '30px 30px 30px 30px',
                        marginTop: 5,
                        position: 'absolute',
                        top: 30,
                        left: 30,
                        backgroundColor: Colors.primary,
                        zIndex: 1,
                    }}
                >
                    {/* Content of the second Paper */}
                </Paper>
            </Box>
        </Box>
    );
}

export default EndContainer;
