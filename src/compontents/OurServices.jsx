import { Box, Paper, Typography, useTheme, useMediaQuery } from '@mui/material';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion'; // Import useInView for scroll-based animations

import security from '../assets/Securities.png';
import insurance from '../assets/Insurance.png';
import benefits from '../assets/Benefits.png';

const OurServices = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Detect mobile screen

    // Animation Variants for sliding, fading, zooming, etc.
    const slideInFromLeft = {
        hidden: { opacity: 0, x: -100 }, // Start off-screen
        visible: { opacity: 1, x: 0 }, // End at final position
    };

    const slideInFromRight = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 },
    };

    const zoomIn = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: { scale: 1, opacity: 1 },
    };

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
        <Box paddingTop={isMobile ? 10 : 20}
            style={{
                background: 'rgba(255, 255, 255, .5)',
                paddingBottom: '6%',
                borderRadius: 30,
            }}
        >
            {/* Title Animation - Sliding in from the Left */}
            <motion.div
                initial="hidden"
                whileInView="visible" // Animation starts when in view
                viewport={{ once: true, amount: 0.2 }} // Trigger only once when 20% of the element is in view
                variants={slideInFromLeft}
                transition={{ duration: 0.8 }} // Smooth sliding effect
            >
                <Typography 
                    variant={isMobile ? 'h4' : 'h2'} 
                    align="center" 
                    color="primary" 
                    fontWeight={800}
                >
                    Our Services
                </Typography>
            </motion.div>

            {/* Services Cards */}
            <Box 
                display="flex" 
                justifyContent="center" 
                gap={isMobile ? 5 : 10} 
                paddingTop={10} 
                flexWrap="wrap"
            >
                {Services.map((service, index) => {
                    const ref = useRef(null);
                    const inView = useInView(ref, { triggerOnce: true, threshold: 0.2 }); // Trigger when 20% is visible

                    return (
                        <motion.div
                            ref={ref} // Attach the ref to monitor this element
                            key={service.title}
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'} // Trigger animation when in view
                            variants={index % 2 === 0 ? slideInFromLeft : slideInFromRight} // Alternating slide directions
                            transition={{ duration: 0.7, delay: index * 0.2 }} // Staggered animation
                            whileHover={{ scale: 1.05 }} // Hover effect
                            whileTap={{ scale: 0.95 }} // Tap effect for mobile
                        >
                            {/* Each service card zooms in */}
                            <motion.div
                                initial="hidden"
                                animate={inView ? 'visible' : 'hidden'} // Zoom effect starts when visible
                                variants={zoomIn}
                                transition={{ duration: 0.8 }} // Zoom effect
                            >
                                <Paper
                                    elevation={3}
                                    style={{
                                        padding: 20,
                                        width: isMobile ? '280px' : '350px', // Adjust width for mobile
                                        borderRadius: 20,
                                        minHeight: 380,
                                        textAlign: 'center',
                                    }}
                                >
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        style={{ 
                                            width: isMobile ? 150 : 200, // Adjust size for mobile
                                            height: isMobile ? 150 : 200, 
                                            borderRadius: '50%', 
                                            marginBottom: 20 
                                        }}
                                    />
                                    <Typography 
                                        variant={isMobile ? 'h5' : 'h4'} 
                                        color="primary" 
                                        fontWeight={800}
                                    >
                                        {service.title}
                                    </Typography>
                                    <Typography 
                                        variant={isMobile ? 'body2' : 'body1'} 
                                        style={{ padding: isMobile ? '0 10px' : '0' }} // Padding for smaller text on mobile
                                    >
                                        {service.description}
                                    </Typography>
                                </Paper>
                            </motion.div>
                        </motion.div>
                    );
                })}
            </Box>
        </Box>
    );
};

export default OurServices;
