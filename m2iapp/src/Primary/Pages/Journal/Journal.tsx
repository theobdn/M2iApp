import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../../Navbar';
export const Journal = () => {
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
        <>
        <Navbar/>
        <h1>Journal page</h1>
        </>
    )
}