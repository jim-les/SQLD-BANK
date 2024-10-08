import React from 'react';
import { Box, Typography, Link, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: '#2C3E50', // Dark background for the footer
                color: 'white',
                padding: '20px 0',
                marginTop: 'auto',
            }}
        >
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                padding="0 10%"
                flexDirection={{ xs: 'column', md: 'row' }} // Stack on small screens
            >
                {/* Left Section: Company Info */}
                <Typography variant="h6" fontWeight="bold">
                    SQLD Bank
                </Typography>

                {/* Center Section: Navigation Links */}
                <Box display="flex" gap={3} mt={{ xs: 2, md: 0 }}>
                    <Link href="/" color="inherit" underline="none">Home</Link>
                    <Link href="/about" color="inherit" underline="none">About</Link>
                    <Link href="/contact" color="inherit" underline="none">Contact</Link>
                    <Link href="/services" color="inherit" underline="none">Services</Link>
                </Box>

                {/* Right Section: Social Media */}
                <Box display="flex" gap={2} mt={{ xs: 2, md: 0 }}>
                    <IconButton aria-label="Facebook" color="inherit">
                        <FacebookIcon />
                    </IconButton>
                    <IconButton aria-label="Twitter" color="inherit">
                        <TwitterIcon />
                    </IconButton>
                    <IconButton aria-label="Instagram" color="inherit">
                        <InstagramIcon />
                    </IconButton>
                    <IconButton aria-label="LinkedIn" color="inherit">
                        <LinkedInIcon />
                    </IconButton>
                </Box>
            </Box>

            {/* Bottom Section: Copyright */}
            <Box textAlign="center" paddingTop="10px">
                <Typography variant="body2">
                    © {new Date().getFullYear()} SQLD Bank. All rights reserved.
                </Typography>
            </Box>
        </Box>
    );
}

export default Footer;
