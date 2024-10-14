import { Box, Paper,  Typography, Button } from '@mui/material';
import React from 'react';
import Grid from '@mui/material/Grid2';
// plus icon
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import { BorderColor } from '@mui/icons-material';
import { useAppContext } from '../context/AppContext';

const BalanceWidget = () => {
    const { user } = useAppContext();

    return (
        <Paper elevation={3} sx={{ padding: 2, borderRadius: 2 }} BorderColor={'green'}>
            <Grid container>
                <Grid size={4} padding={1}>
                    <img src="https://galeri0.uludagsozluk.com/56/banka_61691.gif" alt=""
                        style={{
                            width: '80%',
                            height: '100%',
                            objectFit: 'cover',
                            borderRadius: '20px 20px 20px 20px',
                        }}
                    />
                </Grid>

                <Grid size={6}>
                    <Typography variant="h6" fontWeight={800}>2 Banks Accounts</Typography>
                    <Typography variant="h6" marginTop={5}>Total Current BalanceBalance</Typography>
                    <Typography variant="h4" fontWeight={800}>$ {user.balance - 60}</Typography>
                </Grid>

                <Grid size={2}>
                    <Link to="/addBank" style={{ textDecoration: 'none' }}>
                        <Box  display="flex" alignItems="center" justifyContent="center" bgcolor={'primary.main'} color={'white'} padding={1} borderRadius={2} width={'100px'}>
                            <AddIcon />
                            Add Bank
                        </Box>
                    </Link>    
                </Grid>
            </Grid>
        </Paper>
    )
}

export default BalanceWidget