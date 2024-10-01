import React from 'react';
import { Box, Typography, TextField,Container, Button, Tabs, Tab } from '@mui/material';
import Grid from '@mui/material/Grid2';
import SearchIcon from '@mui/icons-material/Search';
// import components
import { Link } from 'react-router-dom';
import { Colors } from '../../utils';
import BalanceWidget from '../../compontents/BalanceWidget';
import { useAppContext } from '../../context/AppContext';


const MainContent = () => {
    const { user } = useAppContext();


    return (
        <Box paddingLeft={10}>
            <Typography variant="h4" fontWeight={800} color={'primary'}>{user.username}</Typography>

            <Typography variant='h6' color={Colors.black.darker} sx={{ margin: '20px 0' }}>Access & manager your account and transaction efficiently</Typography>

            <BalanceWidget />

            {/* recent Transactions */}

            <Box>
                <Box display="flex" justifyContent="space-between" alignItems={'center'} paddingTop={2}>
                    <Typography variant="h6" fontWeight={800} color={Colors.black.darker} sx={{ margin: '20px 0' }}>Recent Transactions</Typography>
                    <Button variant="outlined" color="primary" component={Link} to="/signup" padding={0} style={{height: "40px"}}>View All</Button>
                </Box>

                {/* tabs */}
                <TransactionTabs />

                {/* transaction list */}
            </Box>


        </Box>
    )
}

const TransactionTabs = () => {
    const tabs = [
        {title: 'Chase Bank'},
        {title: 'Wells Fargo'},
        {title: 'Bank of America'},
    ]
    const [activeTab, setActiveTab] = React.useState(0);

    return (
        <Box>
            <Tabs value={activeTab} onChange={(e, value) => setActiveTab(value)}>
                {
                    tabs.map((tab, index) => (
                        <Tab key={index} label={tab.title} />
                    ))
                }
            </Tabs>
        </Box>

    )
}

export default MainContent