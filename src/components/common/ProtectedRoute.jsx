import React, { useEffect } from 'react'
import { useAuth } from '../../hooks/useAuth'
import { useNavigate } from 'react-router-dom';

function ProtectedRoute( {children }) {
    const {isLoggedIn}= useAuth();

    const navigate =useNavigate();
    console.log("isloggedin", isLoggedIn);

    useEffect(()=> {
    if (!isLoggedIn){
        navigate('/login');
    }

    }, [navigate]);
  return children;

}

export default ProtectedRoute
