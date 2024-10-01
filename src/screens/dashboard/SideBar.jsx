import React, { useEffect } from 'react';
import { Box, Typography, TextField,Container, Button } from '@mui/material';
import Grid from '@mui/material/Grid2';
// icons imports
import SearchIcon from '@mui/icons-material/Search';
// icons in the NavLinks import logout icon
import { Home, AccountBalance, History, Payment, Settings, Logout } from '@mui/icons-material';
// import components
import { Link, useNavigate } from 'react-router-dom';
import { Colors } from '../../utils';
import Logo from "../../assets/logo.png";
import { useAppContext } from '../../context/AppContext';

// home, myBank, Transaction History, Payment Transfer, settings
const NavLinks = [
    { title: 'Home', icon: Home },
    { title: 'My Bank', icon: AccountBalance },
    { title: 'Transaction History', icon: History },
    { title: 'Payment Transfer', icon: Payment },
    { title: 'Settings', icon: Settings },
  ];
  

const SideBar = ( { search, setSearch } ) => {
    const navigation = useNavigate();
    const [active, setActive] = React.useState('Home');
    const { logout } = useAppContext();

    useEffect(() => {
        // Fetch the URL and set the active link only on mount
        const url = window.location.pathname;
        const link = url.split('/').pop() || 'Home'; // Default to 'Home' if empty
        const decodedLink = decodeURIComponent(link.replace(/-/g, ' ')); // Decode URL and replace hyphens
        setActive(decodedLink.charAt(0).toUpperCase() + decodedLink.slice(1)); // Capitalize
        if (decodedLink === 'dashboard') setActive('Home');
    }, []); // Empty dependency array means this runs only once on mount
    
    const handleChangeTab = (e) => {
        setActive(e.target.textContent);
        if (e.target.textContent === 'Home') return navigation('/dashboard');
        navigation(`/${e.target.textContent}`);   
    }
    
    return (
        <Box>
            <Box display="flex" alignItems="center" gap={1.3} sx={{ padding: '10px 0'}}>
                <img src={Logo} alt="logo" width="50px" height="50px" />
                <Typography variant="h4" fontWeight={800} color={'primary'}>SQLD</Typography>
            </Box>

            {/* search Textfield with search @mui/material-icon */}
            <TextField
                fullWidth
                variant="outlined"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search"
                InputProps={{
                    startAdornment: <SearchIcon color="primary" />,
                    sx: { margin: '20px 0'}
                }}
                // chnage border color
                sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: Colors.primary } } }}
            />

            {/* NavLinks active link should be blue else transparent */}
            <Box>
                {NavLinks.map((link, index) => (
                    <Box key={index} marginBottom={3} display="flex" alignItems="center" gap={1.3} sx={{ padding: '10px 0', cursor: 'pointer', borderRadius: '10px'}} bgcolor={link.title === active ? Colors.primary : 'transparent'} onClick={handleChangeTab}>
                        {React.createElement(link.icon)}
                        <Typography variant="h6" color={link.title === active ? Colors.lighter: Colors.black.darker}>{link.title}</Typography>
                    </Box>
                ))}
            </Box>

            {/* absolute bottom logou with icon */}
            <Box position="absolute" display={'flex'} alignItems={'center'} gap={3} bottom={0} sx={{ cursor: 'pointer', borderRadius: '10px', padding: '10px'}} onClick={logout}>
                <Logout />
                <Typography variant="h6" color={Colors.black.darker}>Logout</Typography>
            </Box>
        </Box>
    )
}

export default SideBar