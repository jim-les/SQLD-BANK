import { Box, Paper, Typography } from '@mui/material';
import React from 'react';
import { motion } from 'framer-motion'; // Importing framer-motion

import AboutUSImage from '../assets/AboutUs.png';

const AboutUs = () => {

    return (
        <Box paddingTop={20}>
            <Typography variant="h2" align="center" color="primary" fontWeight={800}>
                About Us
            </Typography>
            <Box>
                <motion.div
                    initial={{ opacity: 0, y: 50 }} // Initial state
                    animate={{ opacity: 1, y: 0 }} // Animation when in view
                    whileHover={{ scale: 1.05 }} // Hover effect
                    whileTap={{ scale: 0.95 }} // Tap effect for mobile
                    
                >
                    <div style={{
                        width: '100%',
                        borderRadius: 20,
                        maxHeight: '60vh',
                        textAlign: 'center',
                        overflow: 'hidden'
                    }}>
                        <img src={AboutUSImage} alt="About Us" style={{ width: '100%', height: 'auto' }} />
                    </div>
                </motion.div>
            </Box>
        </Box>
    );
};

export default AboutUs;
