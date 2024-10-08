import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import React from 'react';
import { motion } from 'framer-motion'; // Importing framer-motion
import AboutUSImage from '../assets/AboutUs.png'; // Importing the image

const AboutUs = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Detect if the screen is mobile

    return (
        <Box paddingTop={isMobile ? 10 : 20} paddingX={isMobile ? 1 : 0}> {/* Adjust padding for mobile */}
            {/* Section Title */}
            <Typography 
                variant={isMobile ? 'h4' : 'h2'} 
                align="center" 
                color="primary" 
                fontWeight={800}
            >
                About Us
            </Typography>

            {/* Image with Animation */}
            <Box mt={4} display="flex" justifyContent="center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }} // Initial state
                    animate={{ opacity: 1, y: 0 }} // Animation when in view
                    whileHover={{ scale: 1.05 }} // Hover effect
                    whileTap={{ scale: 0.95 }} // Tap effect for mobile
                >
                    <div style={{
                        width: '100%',
                        borderRadius: 20,
                        maxHeight: isMobile ? '40vh' : '60vh', // Adjust height for mobile
                        textAlign: 'center',
                        overflow: 'hidden'
                    }}>
                        <img src={AboutUSImage} alt="About Us" style={{ width: '100%', height: 'auto' }} />
                    </div>
                </motion.div>
            </Box>

            {/* Context/Description Text */}
            <Box mt={6} paddingX={isMobile ? 1 : '10%'}> {/* Adjust padding for mobile */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }} // Fade in from the left
                    animate={{ opacity: 1, x: 0 }} // Slide in animation
                    transition={{ duration: 0.6, delay: 0.2 }} // Smooth transition
                    style={{
                        display: 'flex',
                        flexDirection: isMobile ? 'column' : 'row', // Stack content vertically on mobile
                        alignItems: 'center',
                    }}
                >
                    <Typography 
                        variant="h5" 
                        color="textSecondary" 
                        align={isMobile ? 'left' : 'center'} 
                        fontWeight={500} 
                        width={isMobile ? '100%' : '50%'}
                        style={{ marginBottom: isMobile ? '20px' : '0' }} // Add margin for mobile stacking
                    >
                        SQLD Bank has been committed to providing unparalleled financial services
                        to individuals and businesses worldwide. Our mission is to help our clients
                        achieve financial success through innovative solutions, robust security, and
                        personalized services. We pride ourselves on creating a welcoming environment
                        where customers feel valued and understood.
                    </Typography>

                    <Box width={isMobile ? '100%' : '50%'}>
                        <img 
                            src="https://mabreybank.s3.us-west-2.amazonaws.com/wp-content/uploads/2020/02/13202711/banking-illustration-full.svg" 
                            alt="Illustration" 
                            style={{ width: '100%' }} 
                        />
                    </Box>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }} // Fade in from the right
                    animate={{ opacity: 1, x: 0 }} // Slide in animation
                    transition={{ duration: 0.6, delay: 0.4 }} // Smooth transition
                    style={{ marginTop: '20px' }}
                >
                    <Typography 
                        variant="h6" 
                        color="textSecondary" 
                        align={isMobile ? 'left' : 'center'} // Align text differently on mobile
                    >
                        Our team of experts is dedicated to ensuring that every customer gets
                        tailored solutions for their financial growth. Join us on this journey
                        of building a secure and prosperous financial future!
                    </Typography>
                </motion.div>
            </Box>
        </Box>
    );
};

export default AboutUs;
