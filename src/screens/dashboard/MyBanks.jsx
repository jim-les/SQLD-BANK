import React from 'react';
import { Box, Typography, TextField,Container, Button, Tabs, Tab } from '@mui/material';
import Grid from '@mui/material/Grid2';
import SearchIcon from '@mui/icons-material/Search';
// import components
import { Link } from 'react-router-dom';
import { Colors } from '../../utils';
import SideBar from './SideBar';
import BankCard from '../../compontents/BankCard';

const MyBanks = () => {
    // cards
    const [cards, setCards] = React.useState([
        {
            title: 'First Bank',
            accountHolder: 'John Doe',
            accountNumber: '1234 5678 9012 3456',
            ccv: '123',
            expiry: '12/23',
        },
        {
            title: 'WORLD Bank',
            accountHolder: 'John Doe',
            accountNumber: '1234 5678 9012 3456',
            ccv: '123',
            expiry: '12/23',
        },
       
    ]);
    return (
        <Box backgroundColor={Colors.lighter} paddingLeft={10} paddingRight={5} paddingTop={5} overflow={'scroll'} maxHeight={'100vh'} height={'100vh'}>
            <Grid container>
                <Grid size={2}>
                    <SideBar />
                </Grid>

                <Grid size={10}>
                    <Box paddingLeft={10}>
                        <Typography variant="h4" fontWeight={800} color={'primary'}>My Banks Accounts</Typography>
                        <Typography variant='h6' color={Colors.black.darker} sx={{ margin: '20px 0' }}>Access & manager your account and transaction efficiently</Typography>
                        {/* horizontal line */}
                        <br />
                        <hr style={{ color: Colors.black.lighter, backgroundColor: Colors.dark}} />
                        <br />

                        <Typography variant='h6' color={Colors.black.darker} sx={{ margin: '20px 0' }} fontWeight={800}>Your Cards</Typography>

                        <Grid container spacing={2}>
                            {cards.map((card, index) => (
                                <Grid item key={index} size={4}>
                                    <BankCard card={card} />
                                </Grid>
                            ))}
                        </Grid>

                    </Box>

                </Grid>
            </Grid>
        </Box>
    )
}

export default MyBanks