import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import Grid from '@mui/material/Grid2';
import axios from 'axios'; // Import axios
import { Colors } from '../../utils';
import SideBar from './SideBar';
import { useAppContext } from '../../context/AppContext';

const PaymentTransfer = () => {
    const [selectedBank, setSelectedBank] = useState('First Bank');
    const [email, setEmail] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [amount, setAmount] = useState('');
    const [transferNote, setTransferNote] = useState('');
    const { baseUrl } = useAppContext();

    // Function to handle the transfer
    const handleTransfer = async () => {
        try {
            const transferData = {
                bank: selectedBank,
                email,
                accountNumber,
                amount,
                transferNote,
            };

            // Make the POST request to the backend
            const response = await axios.post(`${baseUrl}/bankcards/transfer`, {
                bank: selectedBank,
                email,
                accountNumber,
                amount,
                transferNote,
            });

            // Handle successful transfer
            if (response.status === 200) {
                alert('Funds transferred successfully!');
            } else {
                alert('Transfer failed. Please try again.');
            }
        } catch (error) {
            alert('An error occurred while transferring funds.');
        }
    };

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

                        <Box display='flex' marginTop={2} paddingTop={2} borderTop={1} borderColor={Colors.dark} gap={'20%'} alignItems='center'>
                            <Box maxWidth={'26%'}>
                                <Typography variant='h6' color={Colors.black.darker} fontWeight={800}>Transfer Note (Optional)</Typography>
                                <Typography variant='body' color={Colors.black.darker} >Please provide any additional information or instructions related to the transfer </Typography>
                            </Box>

                            <Box>
                                <TextField
                                    placeholder='Dear John, I am transferring $100 to your account.'
                                    variant="outlined"
                                    multiline
                                    rows={4}
                                    sx={{ width: 500 }}
                                    value={transferNote}
                                    onChange={(e) => setTransferNote(e.target.value)}
                                />
                            </Box>
                        </Box>

                        <Box display='flex' marginTop={2} paddingTop={2} borderTop={1} borderColor={Colors.dark} gap={'20%'} alignItems='center'>
                            <Box>
                                <Typography variant='h6' color={Colors.black.darker} fontWeight={800}>Bank account details</Typography>
                                <Typography variant='body' color={Colors.black.darker} >Enter the bank account details of the recipient</Typography>
                            </Box>
                        </Box>

                        <Box display='flex' marginTop={2} paddingTop={2} borderTop={1} borderColor={Colors.dark} gap={'20%'} alignItems='center'>
                            <Typography variant='h6' color={Colors.black.darker} fontWeight={800}>Recipient Email</Typography>
                            <TextField
                                placeholder="Recipient Email"
                                variant="outlined"
                                sx={{ width: 500 }}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Box>

                        <Box display='flex' marginTop={2} paddingTop={2} borderTop={1} borderColor={Colors.dark} gap={'20%'} alignItems='center'>
                            <Typography variant='h6' color={Colors.black.darker} fontWeight={800}>Recipient Account Number</Typography>
                            <TextField
                                placeholder="Recipient Account Number"
                                variant="outlined"
                                sx={{ width: 500 }}
                                value={accountNumber}
                                onChange={(e) => setAccountNumber(e.target.value)}
                            />
                        </Box>

                        <Box display='flex' marginTop={2} paddingTop={2} borderTop={1} borderColor={Colors.dark} gap={'20%'} alignItems='center'>
                            <Typography variant='h6' color={Colors.black.darker} fontWeight={800}>Amount</Typography>
                            <TextField
                                placeholder="Amount"
                                variant="outlined"
                                sx={{ width: 500 }}
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                            />
                        </Box>

                        <Button 
                            variant="contained" 
                            color="primary" 
                            sx={{ margin: '20px 0', padding: '10px 20px', width: '100%' }} 
                            onClick={handleTransfer} // Trigger transfer on button click
                        >
                            Transfer Funds
                        </Button>

                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default PaymentTransfer;
