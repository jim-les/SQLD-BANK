import React from 'react';
import { Box, Typography, Paper, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';

const FeatureSystems = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Detect if the screen is small (mobile)

    const features = [
        { title: 'ATM Network', description: 'Access money anytime from our vast ATM network.' },
        { title: 'Mobile Banking', description: 'Secure transactions from your phone.' },
        { title: 'Loan Services', description: 'Flexible loan options tailored to your needs.' },
        { title: 'Investment Plans', description: 'Grow your wealth with expert advice.' },
        { title: 'Customer Support', description: '24/7 support to assist you.' },
        { title: 'Insurance Solutions', description: 'Comprehensive insurance coverage for all.' },
    ];

    // Duplicate features for infinite loop effect
    const allFeatures = [...features, ...features]; 

    const containerVariants = {
        animate: {
            x: ['0%', '-100%'], // Move from 0% to -100%
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: 'loop',
                    duration: 30, // Control speed of movement
                    ease: 'linear', // Smooth, constant movement
                },
            },
        },
    };

    return (
        <Box overflow="hidden" paddingTop={5} position="relative" width="100%" paddingY={10}>
            <Typography 
                variant={isMobile ? 'h4' : 'h2'} // Adjust typography for mobile
                align="center" 
                color="primary" 
                fontWeight={800} 
                paddingY={5}
            >
                Featured Systems
            </Typography>
            <Box
                component={motion.div}
                variants={containerVariants}
                animate="animate"
                display="flex"
                gap={isMobile ? 2 : 5} // Adjust gap based on screen size
                position="relative"
                style={{ width: '200%' }} // Ensure space for all cards to slide
            >
                {allFeatures.map((feature, index) => (
                    <Paper
                        key={index}
                        elevation={3}
                        style={{
                            padding: isMobile ? '10px' : '20px', // Adjust padding for mobile
                            minWidth: isMobile ? '150px' : '250px', // Adjust card width for mobile
                            borderRadius: '10px',
                            textAlign: 'center',
                            backgroundColor: '#f5f5f5',
                            minHeight: isMobile ? 150 : 200, // Adjust height for mobile
                            justifyContent: 'center',
                            alignItems: 'center',
                            display: 'flex',
                        }}
                    >
                        <Box>
                            <Typography 
                                variant="h6" 
                                color="primary" 
                                fontWeight={700}
                                style={{ fontSize: isMobile ? '1rem' : '1.25rem' }} // Adjust font size
                            >
                                {feature.title}
                            </Typography>
                            <Typography 
                                variant="body1" 
                                style={{ marginTop: 10, fontSize: isMobile ? '0.875rem' : '1rem' }} // Adjust font size
                            >
                                {feature.description}
                            </Typography>
                        </Box>
                    </Paper>
                ))}
            </Box>
        </Box>
    );
};

export default FeatureSystems;
