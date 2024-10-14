import React from 'react';
import {
    Box,
    Typography,
    Button,
    Tabs,
    Tab,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper
} from '@mui/material';
import { Link } from 'react-router-dom';
import { Colors } from '../../utils';
import BalanceWidget from '../../compontents/BalanceWidget';
import { useAppContext } from '../../context/AppContext';

const MainContent = () => {
    const { user } = useAppContext();

    // Sample transaction data (replace this with dynamic data as needed)
    const transactions = [
        { date: '12/12/2021', id: '678763788883', amount: '$60' },
    ];

    return (
        <Box paddingLeft={10}>
            <Typography variant="h4" fontWeight={800} color="primary">
                {user.username}
            </Typography>

            <Typography variant="h6" color={Colors.black.darker} sx={{ margin: '20px 0' }}>
                Access & manage your account and transactions efficiently
            </Typography>

            <BalanceWidget />

            {/* Recent Transactions */}
            <Box>
                <Box display="flex" justifyContent="space-between" alignItems="center" paddingTop={2}>
                    <Typography variant="h6" fontWeight={800} color={Colors.black.darker} sx={{ margin: '20px 0' }}>
                        Recent Transactions
                    </Typography>
                    <Button 
                        variant="outlined" 
                        color="primary" 
                        component={Link} 
                        to="/signup" 
                        sx={{ height: "40px" }}
                    >
                        View All
                    </Button>
                </Box>

                {/* Tabs */}
                <TransactionTabs />

                {/* Transaction Table */}
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Date</TableCell>
                                <TableCell>Transaction ID</TableCell>
                                <TableCell>Amount</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {transactions.map((transaction, index) => (
                                <TableRow key={index}>
                                    <TableCell>{transaction.date}</TableCell>
                                    <TableCell>{transaction.id}</TableCell>
                                    <TableCell>{transaction.amount}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    );
};

const TransactionTabs = () => {
    const tabs = [
        { title: 'Chase Bank' },
        { title: 'Wells Fargo' },
        { title: 'Bank of America' },
    ];
    const [activeTab, setActiveTab] = React.useState(0);

    return (
        <Box>
            <Tabs value={activeTab} onChange={(e, value) => setActiveTab(value)}>
                {tabs.map((tab, index) => (
                    <Tab key={index} label={tab.title} />
                ))}
            </Tabs>
        </Box>
    );
};

export default MainContent;
