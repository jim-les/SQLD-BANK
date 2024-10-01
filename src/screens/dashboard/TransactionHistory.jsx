import React from 'react';
import { Box, Typography, TextField,Container, Button, Tabs, Tab, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Grid from '@mui/material/Grid2';
import SearchIcon from '@mui/icons-material/Search';
// import components
import { Link } from 'react-router-dom';
import { Colors } from '../../utils';
import SideBar from './SideBar';
import { Filter } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
}));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
}));


const TransactionHistory = () => {
    const balance = 1000.00;
    return (
        <Box backgroundColor={Colors.lighter} paddingLeft={10} paddingRight={5} paddingTop={5} overflow={'scroll'} maxHeight={'100vh'} height={'100vh'}>
            <Grid container>
                <Grid size={2}>
                    <SideBar />
                </Grid>

                <Grid size={10}>
                    <Box paddingLeft={10}>
                        <Typography variant="h4" fontWeight={800} color={'primary'}>Transaction History</Typography>
                        <Typography variant='h6' color={Colors.black.darker} sx={{ margin: '20px 0' }}>Gain Insights and Track Your Transactions Over Time</Typography>
                        {/* horizontal line */}
                        
                        <Paper elevation={3} sx={{ padding: 2, borderRadius: 5, background: 'linear-gradient(to bottom right, #1292B4 30%, lightblue 70%)', height: 150, }}>
                            <Box display='flex' justifyContent='space-between' alignItems='center'>
                                    
                                <Box padding={2}>
                                    <Typography variant='h6' color={Colors.lighter} fontWeight={800}>Bank Name</Typography>
                                    <Typography variant='h6' color={Colors.lighter} >Chase Growth Savings Account</Typography>
                                    <Typography variant='h6' color={Colors.lighter} >●●●● ●●●● ●●●● 9999</Typography>
                                </Box>

                                <Box>
                                    <Box color="primary" width={200} borderColor={Colors.dark} border={1} padding={2} borderRadius={5} textAlign={'center'}>
                                        <Typography variant='h9' color={Colors.lighter} fontWeight={600}>Current Balance</Typography>
                                        <Typography variant='h4' color={Colors.lighter} fontWeight={800}>${balance}</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Paper>

                        <br />
                        <Box display='flex' justifyContent='space-between' alignItems='center' gap={2} marginTop={5}>
                            <Typography variant='h6' color={Colors.black.darker} sx={{ margin: '20px 0' }} fontWeight={800}>Transaction History</Typography>
                            <Button variant="contained" color="primary" sx={{ margin: '20px 0', padding: '10px 20px' }}>
                                Filter
                                <Filter sx={{ marginLeft: 5}} />
                            </Button>
                        </Box>

                        {/* table  transaction, amount date , status , category */}

                        <Box>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} aria-label="customized table">
                                    <TableHead>
                                        <TableRow>
                                            <StyledTableCell>Transaction</StyledTableCell>
                                            <StyledTableCell align="right">Amount</StyledTableCell>
                                            <StyledTableCell align="right">Date</StyledTableCell>
                                            <StyledTableCell align="right">Status</StyledTableCell>
                                            <StyledTableCell align="right">Category</StyledTableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <StyledTableRow>
                                            <StyledTableCell component="th" scope="row">
                                                Deposit
                                            </StyledTableCell>
                                            <StyledTableCell align="right">$1000.00</StyledTableCell>
                                            <StyledTableCell align="right">12/12/2021</StyledTableCell>
                                            <StyledTableCell align="right">Completed</StyledTableCell>
                                            <StyledTableCell align="right">Income</StyledTableCell>
                                        </StyledTableRow>
                                        <StyledTableRow>
                                            <StyledTableCell component="th" scope="row">
                                                Withdrawal
                                            </StyledTableCell>
                                            <StyledTableCell align="right">$500.00</StyledTableCell>
                                            <StyledTableCell align="right">12/12/2021</StyledTableCell>
                                            <StyledTableCell align="right">Completed</StyledTableCell>
                                            <StyledTableCell align="right">Expense</StyledTableCell>
                                        </StyledTableRow>
                                        <StyledTableRow>
                                            <StyledTableCell component="th" scope="row">
                                                Deposit
                                            </StyledTableCell>
                                            <StyledTableCell align="right">$1000.00</StyledTableCell>
                                            <StyledTableCell align="right">12/12/2021</StyledTableCell>
                                            <StyledTableCell align="right">Completed</StyledTableCell>
                                            <StyledTableCell align="right">Income</StyledTableCell>
                                        </StyledTableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box>

                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default TransactionHistory