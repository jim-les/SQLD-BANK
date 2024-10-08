import React from 'react';
import { Box, Typography, TextField,Container, Button } from '@mui/material';
import Grid from '@mui/material/Grid2';
import SearchIcon from '@mui/icons-material/Search';
// import components
import { Link } from 'react-router-dom';
import { Colors } from '../../utils';
import SideBar from './SideBar';
import MainContent from './MainContent';
import EndContainer from './EndContainer';
import { BadgerWidget } from '../../compontents/BadgerWidget';

const Dashboard = () => {
    const [search, setSearch] = React.useState('');

    return (
        <Box backgroundColor={Colors.lighter} paddingLeft={10} paddingRight={5} paddingTop={5} overflow={'scroll'} maxHeight={'100vh'} height={'100vh'}>
            <Grid container>
                <BadgerWidget />
                {/* sidebar component */}
                <Grid size={2}>
                    <SideBar search={search} setSearch={setSearch} />
                </Grid>

                {/* Main context component */}
                <Grid size={7}>
                    <MainContent />
                </Grid>

                <Grid size={3}>
                   <EndContainer />
                </Grid>
               
            </Grid>
        </Box>
    )
}

export default Dashboard