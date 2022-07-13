import React, { useContext } from 'react'
import Button from './Button'
import './Login.css'
import { LoginContext } from '../contexts/LoginContext';
const host='http://localhost:3300';

let history;

const handleLogin = async (setLoggedIn, setUser) => {
  const username = document.querySelector('input[name="username"]').value
  const password = document.querySelector('input[name="password"]').value
  const response = await fetch(`${host}/api/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  })
  const data = await response.json()
  if (response.status === 200) {
    alert(
      'Login Successful!'
    )
    setLoggedIn(true);
    console.log(data);
    setUser(data);
    history.replace('/home');
  }else alert(data.errors)
}

const Login = () => {
  const { loggedIn, setLoggedIn, user, setUser, login, setLogin, useHistory } = useContext(LoginContext);
  history = useHistory();

  return (
    <div className="OuterBox">
      <div className="LoginBox">
        <h1>Login</h1>
        <form className="LoginForm">
          <label>Username:</label>
          <input type="text" name="username" />
          <label>Password:</label>
          <input type="password" name="password" />
          <Button text="Login" handler={handleLogin} loginStatus={setLoggedIn} userStatus={setUser}/>
          <button className="btnComponent" id="togglesignup" onClick={() => setLogin(!login)}>Create an account</button>
        </form>
      </div>
    </div>
  )
}

export default Login