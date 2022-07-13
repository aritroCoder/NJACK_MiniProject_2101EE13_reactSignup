import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { useHistory } from 'react-router-dom';
import './App.css';
import { LoginContext } from './contexts/LoginContext';
import LoginSuccess from './pages/LoginSuccess';
import LoginSignup from './pages/LoginSignup';

//create a login form with react

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState([]);
  const [login, setLogin] = useState(false);

  return (
    <Router>
      <LoginContext.Provider value={{ loggedIn, setLoggedIn, user, setUser, login, setLogin, useHistory }}>
        <Switch>
          <Route exact path="/"><LoginSignup /></Route>
          {/* <Route exact path="/home"><LoginSuccess/></Route> */}
          {/* <Redirect to="/"/> */}
        </Switch>
      </LoginContext.Provider>
    </Router>
  );
}

export default App;
