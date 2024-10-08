import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const FeatureSystems = () => {
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
                    duration: 220, // Control speed of movement
                    ease: 'linear', // Smooth, constant movement
                },
            },
        },
    };

    return (
        <Box overflow="hidden" paddingTop={5} position="relative" width="100%" paddingY={10}>
            <Typography variant="h2" align="center" color="primary" fontWeight={800} paddingY={5}>
                Featured Systems
            </Typography>
            <Box
                component={motion.div}
                variants={containerVariants}
                animate="animate"
                display="flex"
                gap={5}
                position="relative"
                style={{ width: '200%' }} // Ensure space for all cards to slide
            >
                {allFeatures.map((feature, index) => (
                    <Paper
                        key={index}
                        elevation={3}
                        style={{
                            padding: '20px',
                            minWidth: '250px',
                            borderRadius: '10px',
                            textAlign: 'center',
                            backgroundColor: '#f5f5f5',
                            minHeight: 200,
                            justifyContent: 'center',
                            alignItems: 'center',
                            display: 'flex',
                        }}
                    >
                        <Box>

                            <Typography variant="h6" color="primary" fontWeight={700}>
                                {feature.title}
                            </Typography>
                            <Typography variant="body1" style={{ marginTop: 10 }}>
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
