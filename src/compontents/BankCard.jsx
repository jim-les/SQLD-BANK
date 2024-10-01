import React from 'react'
import { Box, Paper, Typography } from '@mui/material';
import { Colors } from '../utils';
// copy icon form material ui
import CopyIcon from '@mui/icons-material/FileCopy';


const BankCard = ({card}) => {
    return (
        <Paper elevation={3} 
            sx={{ padding: 2, 
                borderRadius: 5, 
                background: 'linear-gradient(to bottom right, #1292B4 30%, lightblue 70%)',
                height: 200,
            }}
        >
            <Box display='flex' justifyContent='space-between' alignItems='center'>
                <Typography variant='h6' color={Colors.lighter} fontWeight={800} padding={2}>{card.title}</Typography>
                <CopyIcon style={{ color: Colors.lighter}} />
            </Box>
            
            <Box height={50} />

            <Box display='flex' gap={'20%'} alignItems='center'>
                <Typography variant='h6' color={Colors.lighter} fontWeight={800} padding={2}>{card.accountHolder}</Typography>
                <Typography variant='h6' color={Colors.lighter} fontWeight={800} padding={2}>{card.expiry}</Typography>
            </Box>
            <Box display='flex' gap={'20%'} alignItems='center'>
                <Typography variant='h6' color={Colors.lighter} fontWeight={800} paddingLeft={2} letterSpacing={3}>{card.accountNumber}</Typography>
                <img src="https://logos-world.net/wp-content/uploads/2020/09/Mastercard-Logo.png" alt=""
                    style={{ width: 40}}
                />
            </Box>
        </Paper>
    )
}

export default BankCard