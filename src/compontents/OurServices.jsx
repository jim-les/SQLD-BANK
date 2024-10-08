import { Box, Container, Paper, Typography } from '@mui/material'
import React from 'react';

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
    ]
    return (
        <Box paddingTop={20}>
            <Typography variant="h2" align="center" color="primary" fontWeight={800}>Our Services</Typography>   
            <Box display="flex" justifyContent="center" gap={10} paddingTop={10}>
                {Services.map(service => (
                    <Paper elevation={3} style={{ padding: 20, width: '30%', borderRadius: 20, minHeight: 300, textAlign: 'center' }}>
                        <img 
                            src={service.image}
                            alt="service"
                            style={{ width: 200, height: 200, borderRadius: '50%', marginBottom: 20 }} />
                        <Typography variant="h4" color="primary" fontWeight={800}>{service.title}</Typography>
                        <Typography variant="body1">{service.description}</Typography>
                    </Paper>
                ))}
            </Box>
        </Box>
    )
}

export default OurServices