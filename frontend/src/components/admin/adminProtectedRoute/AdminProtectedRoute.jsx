import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Outlet, useNavigate } from 'react-router-dom';

import { useAuthGlobally } from '../../../contexts/AuthContext';
import PopModal from '../popUpModal/PopModal';

const AdminRoute = () => {
    const [ok, setOk] = useState(false);
    const [auth, setAuth] = useAuthGlobally();
    const navigate = useNavigate();

    useEffect(() => {
        console.log('Auth token:', auth?.token); // Debug statement

        const authCheck = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/auth/admin`);
                console.log('Auth check response:', response.data); 

                if (response.data.ok) {
                    setOk(true);
                } else {
                    setOk(false);
                }
            } catch (error) {
                console.error('Error checking authentication:', error);
                setOk(false);
            }
        };

        if (auth?.token) {
            authCheck();
        }
    }, [auth?.token]);

    console.log('OK state:', ok); // Debug statement

    // return ok ? <Outlet /> : navigate('/login');
    return ok ? <Outlet /> : <PopModal open={!ok} onClose={() => navigate('/')} />;
};

export default AdminRoute;




