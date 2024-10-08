import { Box, Paper, Typography } from '@mui/material';
import React from 'react';
import { motion } from 'framer-motion'; // Importing framer-motion

import security from '../assets/Securities.png';
import insurance from '../assets/Insurance.png';
import benefits from '../assets/Benefits.png';

const OurServices = () => {
    const Services = [
        {
            image: security,
            title: 'SECURITIES',
            description: 'SQLD Bank provides the best banking security for our clients finances. We advise everyone to bring their money and help us grow together as a community.'
        },
        {
            image: insurance,
            title: 'INSURANCE',
            description: 'SQLD Bank provides top-notch insurance services to protect your investments. Trust us to secure your financial future.'
        },
        {
            image: benefits,
            title: 'BENEFITS',
            description: 'At SQLD Bank, we offer numerous benefits to our clients, including exclusive offers and personalized services to meet your needs.'
        }
    ];

    return (
        <Box paddingTop={20}
            style={{
                background: 'rgba(255, 255, 255, .5)',
                paddingBottom: '6%',
                borderRadius: 30,
            }}
        >
            <Typography variant="h2" align="center" color="primary" fontWeight={800}>
                Our Services
            </Typography>
            <Box display="flex" justifyContent="center" gap={10} paddingTop={10} flexWrap="wrap">
                {Services.map((service, index) => (
                    <motion.div
                        key={service.title}
                        initial={{ opacity: 0, y: 50 }} // Initial state
                        animate={{ opacity: 1, y: 0 }} // Animation when in view
                        transition={{ duration: 0.5, delay: index * 0.3 }} // Staggered animation
                        whileHover={{ scale: 1.05 }} // Hover effect
                        whileTap={{ scale: 0.95 }} // Tap effect for mobile
                    >
                        <Paper
                            elevation={3}
                            style={{
                                padding: 20,
                                width: '350px',
                                borderRadius: 20,
                                minHeight: 380,
                                textAlign: 'center',
                            }}
                        >
                            <img
                                src={service.image}
                                alt={service.title}
                                style={{ width: 200, height: 200, borderRadius: '50%', marginBottom: 20 }}
                            />
                            <Typography variant="h4" color="primary" fontWeight={800}>
                                {service.title}
                            </Typography>
                            <Typography variant="body1">{service.description}</Typography>
                        </Paper>
                    </motion.div>
                ))}
            </Box>
        </Box>
    );
};

export default OurServices;
