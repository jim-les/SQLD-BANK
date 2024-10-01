// AppContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const AppContext = createContext();
import axios from 'axios';

export const AppProvider = ({ children }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null); // To handle errors
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(false); // Add loading state
    const [user, setUser] = useState(null);
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [isBankCardOpen, setIsBankCardOpen] = useState(true);

    const toggleSidebar = () => {
        setIsBankCardOpen(!isBankCardOpen);
    };

    const baseUrl = 'https://sqld-backend.onrender.com/api';
    const navigate = useNavigate();

    // useEffect to check if user is already logged in else redirect to login page
    // useEffect(() => {
    //     if (isLoggedIn) {
    //         navigate('/dashboard');
    //     } else {
    //         navigate('/login');
    //     }
    // }, [isLoggedIn]);

    const handleCheckLogin = () => {
        if (isLoggedIn) {
            navigate('/dashboard');
        } else {
            navigate('/login');
        }
    }
    

    const login = async () => {
        // Simulate a login process
        setLoading(true); // Start loading

        try {
            const response = await axios.post(`${baseUrl}/login`, { username, password
            });
            setIsLoggedIn(true);
            setUser(response.data.user);
            setError(null);
            console.log(response.data.user);
            setOpen(true);
            setMessage('Success Login');
            handleCheckLogin();
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false); // End loading
        }

    };

    const Signup = async ( data) => {
        // Simulate a login process
        setLoading(true); // Start loading
        try {
            const response = await axios.post(`${baseUrl}/signup`, data);
            setIsLoggedIn(true);
            setUser(response.data.user);
            setError(null);
            console.log(response.data.user);
            setMessage('Success Signup');
            setOpen(true);
            navigate('/login');
        } catch (err) {
            setError(err.message);
        }
        finally {
            setLoading(false); // End loading
        }
    };


    const logout = () => {
        setIsLoggedIn(false);
        setUser(null);
        handleCheckLogin();
    }


    return (
        <AppContext.Provider value={{ username, setUsername, password, setPassword, login, error, loading, logout, user, Signup, open, setOpen, message, setMessage, isBankCardOpen, toggleSidebar }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    return useContext(AppContext);
};
