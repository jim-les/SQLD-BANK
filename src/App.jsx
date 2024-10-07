import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

// import screens
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import Dashboard from './screens/dashboard/Dashboard';
import MyBanks from './screens/dashboard/MyBanks';
import TransactionHistory from './screens/dashboard/TransactionHistory';
import PaymentTransfer from './screens/dashboard/PaymentTransfer';
import HomeScreen from './screens/HomeScreen';

const App = () => {

    return (
        <Router>
            <AppProvider>
                <Routes>
                    <Route path="/" element={<HomeScreen />} />
                    <Route path="/login" element={<LoginScreen />} />
                    <Route path="/signup" element={<SignupScreen />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/My Bank" element={<MyBanks />} />
                    <Route path="/Transaction History" element={<TransactionHistory />} />
                    <Route path="/Payment Transfer" element={<PaymentTransfer />} />
                </Routes>

            </AppProvider>
        </Router>
    );
}

export default App;
