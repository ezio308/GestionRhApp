import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const PrivateRoute = () => {
    const auth = useContext(AuthContext); // determine if authorized, from context or however you're doing it
    console.log(auth)
    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return auth?.user ? <Outlet /> : <Navigate to="/login" />;
}


const PasswordCodeRoute = () => {
    const auth = useContext(AuthContext); // determine if authorized, from context or however you're doing it
    console.log(auth)
    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return auth?.isReset && auth.user == null ? <Outlet /> : <Navigate to="/login" />;

}


const LoginRoute = () => {
    const auth = useContext(AuthContext); // determine if authorized, from context or however you're doing it
    console.log(auth)
    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return auth.user == null ? <Outlet /> : <Navigate to="/" />;
}

const PasswordFormRoute = () => {
    const auth = useContext(AuthContext)
    return auth?.isForm && auth.user == null ? <Outlet/> : <Navigate to = "/login"/>
}

const PasswordDOneROute = () => {
    const auth = useContext(AuthContext)

    return auth?.isConfirmed && auth.user == null ? <Outlet/> : <Navigate to = "/login"/>
}

export  {PrivateRoute , PasswordCodeRoute , LoginRoute , PasswordFormRoute , PasswordDOneROute };