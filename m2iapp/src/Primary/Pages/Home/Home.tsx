import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../../Navbar';

export const Home = () => {
    const navigate = useNavigate()

    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token')

        if (authToken) {
            navigate('/')
        }

        if (!authToken) {
            navigate('/login')
        }
    }, [])
    return (
        <>
        <Navbar/>
        <h1>Home page</h1>
        </>
    )
}