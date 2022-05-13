import { TextField } from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../../Components/Navbar';

const StatistiquePage = () => {
    const navigate = useNavigate()

    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token')

        if (authToken) {
            navigate('/statistiques')
        }

        if (!authToken) {
            navigate('/login')
        }
    }, [])
    return (
        <div>
            <Navbar/>
            <h1>Statistique page</h1>
        </div>
    )
}

export default StatistiquePage;