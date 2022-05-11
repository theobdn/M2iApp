import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../../Navbar';

const PoidsPage = () => {
    const navigate = useNavigate()

    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token')

        if (authToken) {
            navigate('/journal')
        }

        if (!authToken) {
            navigate('/login')
        }
    }, [])
    return (
        <div>
            <Navbar/>
            <h1>Poids page</h1>
        </div>
    )
}

export default PoidsPage;