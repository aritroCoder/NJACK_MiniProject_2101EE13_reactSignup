import React, { useContext } from 'react';
import { LoginContext } from '../contexts/LoginContext';
import Login from '../components/Login';
import LoginSuccess from '../pages/LoginSuccess';
import Signup from '../components/Signup';

const LoginSignup = () => {
    const { loggedIn, setLoggedIn, user, setUser, login, setLogin } = useContext(LoginContext);
    return (
        <div>
        {!loggedIn && (login? <Login/> : <Signup/>)}
        {loggedIn && <LoginSuccess/>}
      </div>
    )
}

export default LoginSignup