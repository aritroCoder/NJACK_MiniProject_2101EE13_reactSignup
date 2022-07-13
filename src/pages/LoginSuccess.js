import React, { useContext, useEffect } from 'react';
import { LoginContext } from '../contexts/LoginContext';
import './LoginSuccess.css';

const LoginSuccess = () => {
  const { loggedIn, setLoggedIn, user, setUser, login, setLogin, useHistory } = useContext(LoginContext);
  let history = useHistory();

  useEffect(() => {
    if (!loggedIn) history.push('/');
  }, [])

  return (
    <>
      <div className="container">
        <h1>Login Successful!</h1>
        <p>Welcome, {user.user.username}</p>
        {/* <p>Authtoken: <br/>{user.authtoken}</p> */}
      </div>
      <div className="parentContent">
      <button className="btnComponent" onClick={()=>{
        setUser("");
        setLogin(false);
        setLoggedIn(false);
        history.push('/');
      }}>Log Out</button>
      <p>Authtoken: <br/>{user.authtoken}<br/></p>
      <p className="content">This is the demo of a react single page login application, where the contents of the page is solely managed by javascript and the entire page can be changed without reloading the page. This helps is creating really fast and robust web applications using react.js.</p></div>
    </>
  )
}

export default LoginSuccess