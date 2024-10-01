import React from 'react';
import { Box, Typography, TextField,Container, Button, Tabs, Tab, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Grid from '@mui/material/Grid2';
import SearchIcon from '@mui/icons-material/Search';
// import components
import { Link } from 'react-router-dom';
import { Colors } from '../../utils';
import SideBar from './SideBar';
import { Filter } from '@mui/icons-material';

const PaymentTransfer = () => {
    const [selectedBank, setSelectedBank] = React.useState('First Bank');
    return (
        <Box backgroundColor={Colors.lighter} paddingLeft={10} paddingRight={5} paddingTop={5} overflow={'scroll'} maxHeight={'100vh'} height={'100vh'}>
            <Grid container>
                <Grid size={2}>
                    <SideBar />
                </Grid>

                <Grid size={10}>
                    <Box paddingLeft={10}>
                        <Typography variant="h4" fontWeight={800} color={'primary'}>Payment Transfer</Typography>
                        <Typography variant='body' color={Colors.black.darker} sx={{ margin: '20px 0' }}>Please provide any specific details or notes related to the payment transfer</Typography>
                        {/* horizontal line */}
                        <br /> 
                        <br /> 
                        <Typography variant='h6' color={Colors.black.darker} sx={{ margin: '20px 0' }} fontWeight={800}>Payment details</Typography>
                        <Typography variant='body' color={Colors.black.darker} sx={{ margin: '20px 0' }}>Enter the details of the recipient</Typography>

                        <Box display='flex' marginTop={2} paddingTop={2} borderTop={1} borderColor={Colors.dark} gap={'20%'} alignItems='center'>
                            <Box maxWidth={'30%'}>
                                <Typography variant='h6' color={Colors.black.darker} fontWeight={800}>Selected Source Bank</Typography>
                                <Typography variant='body' color={Colors.black.darker} >Select the banks you want to transfer from</Typography>
                            </Box>

                            <Box>
                                {/* select ui */}
                                <TextField
                                    select
                                    label="Select"
                                    variant="outlined"
                                    sx={{ width: 300 }}
                                    value={selectedBank}
                                    onChange={(e) => setSelectedBank(e.target.value)}
                                >
                                    <option value="First Bank">First Bank</option>
                                    <option value="Second Bank">Second Bank</option>
                                    <option value="Third Bank">Third Bank</option>
                                </TextField>
                            </Box>
                        </Box>

                        
                        {/* Tranfer Note */}
                        <Box display='flex' marginTop={2} paddingTop={2} borderTop={1} borderColor={Colors.dark} gap={'20%'} alignItems='center'>
                            <Box maxWidth={'26%'}>
                                <Typography variant='h6' color={Colors.black.darker} fontWeight={800}>Transfer Note (Optional)</Typography>
                                <Typography variant='body' color={Colors.black.darker} >Please provide any additional information or instructions related to the transfer </Typography>
                            </Box>

                            <Box>
                                <TextField
                                    placeholder='Dear John

I hope this message finds you well. I am transferring $100 to your account for fun. Please confirm once you receive it.'        
                                    variant="outlined"
                                    height={150}
                                    multiline
                                    sx={{ width: 500 }}
                                />
                            </Box>
                        </Box>

                        {/* Bank Account Details */}
                        <Box display='flex' marginTop={2} paddingTop={2} borderTop={1} borderColor={Colors.dark} gap={'20%'} alignItems='center'>
                            <Box>
                                <Typography variant='h6' color={Colors.black.darker} fontWeight={800}>Bank account details</Typography>
                                <Typography variant='body' color={Colors.black.darker} >Enter the bank account details of the recipient</Typography>
                            </Box>
                        </Box>

                        {/* flex email */}
                        <Box display='flex' marginTop={2} paddingTop={2} borderTop={1} borderColor={Colors.dark} gap={'20%'} alignItems='center'>
                            <Typography variant='h6' color={Colors.black.darker} fontWeight={800}>Recipient Email</Typography>

                            <TextField
                                placeholder="Recipient Email"
                                variant="outlined"
                                sx={{ width: 500 }}
                            />
                        </Box>

                        {/* flex account number */}
                        <Box display='flex' marginTop={2} paddingTop={2} borderTop={1} borderColor={Colors.dark} gap={'20%'} alignItems='center'>
                            <Typography variant='h6' color={Colors.black.darker} fontWeight={800}>Recipient Account Number</Typography>

                            <TextField
                                placeholder="Recipient Account Number"
                                variant="outlined"
                                sx={{ width: 500 }}
                            />
                        </Box>
                            
                        {/* flex amount */}
                        <Box display='flex' marginTop={2} paddingTop={2} borderTop={1} borderColor={Colors.dark} gap={'20%'} alignItems='center'>
                            <Typography variant='h6' color={Colors.black.darker} fontWeight={800}>Amount</Typography>

                            <TextField
                                placeholder="Amount"
                                variant="outlined"
                                sx={{ width: 500 }}
                            />
                        </Box>

                        <Button variant="contained" color="primary" sx={{ margin: '20px 0', padding: '10px 20px', width: '100%' }}> Transfer Funds </Button>

                    </Box>
                </Grid>
            </Grid>
        </Box>
                      
    )
}

export default PaymentTransfer