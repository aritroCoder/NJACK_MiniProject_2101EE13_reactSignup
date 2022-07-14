import React, { useContext } from 'react'
import Button from './Button'
import './Login.css'
import { LoginContext } from '../contexts/LoginContext';

const host = 'http://localhost:3300';

let history;

const handleLogin = async (setLoggedIn, setUser) => {
  const username = document.querySelector('input[name="username"]').value
  const phone = document.querySelector('input[name="phone"]').value
  const password = document.querySelector('input[name="password"]').value
  const confirmPassword = document.querySelector('input[name="cnfrmpwd"]').value
  const response = await fetch(`${host}/api/auth/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password, phone, confirmPassword })
  })
  const data = await response.json()
  if (response.status === 200) {
    alert(
      'Signup Successful!'
    )
    setLoggedIn(true);
    setUser(data);
    history.push('/home');
  } else alert(data.errors[0].msg || data.errors)
}

const Login = () => {
  const { loggedIn, setLoggedIn, user, setUser, login, setLogin, useHistory } = useContext(LoginContext);

  history = useHistory();

  return (
    <div className="OuterBox">
      <div className="LoginBox">
        <h1>Sign Up</h1>
        <form className="LoginForm">
          <label>Username:</label>
          <input type="text" name="username" />
          <label>Phone Number:</label>
          <input type="number" name="phone" />
          <label>Password:</label>
          <input type="password" name="password" />
          <label>Confirm Password:</label>
          <input type="password" name="cnfrmpwd" />
          <Button text="Sign up" handler={handleLogin} loginStatus={setLoggedIn} userStatus={setUser} />
          <button className="btnComponent" id="togglesignup" onClick={()=>setLogin(!login)}>Login to existing account</button>
        </form>
      </div>
    </div>
  )
}

export default Login