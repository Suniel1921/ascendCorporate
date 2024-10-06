import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Outlet, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useAuthGlobally } from '../../contexts/AuthContext';

const ProtectedRoute = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [auth] = useAuthGlobally();
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/auth/protectedRoute`);
                setIsAuthenticated(response.data.ok);
            } catch (error) {
                console.error('Error checking authentication:', error);
                toast.error('Error checking authentication')
                setIsAuthenticated(false);
            }
        };

        if (auth?.token) {
            checkAuth();
        } else {
            navigate('/login');
        }
    }, [auth?.token, navigate]);

    return isAuthenticated ? <Outlet /> : null;
};

export default ProtectedRoute;
