import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

import AWSLogin from './components/AWSLogin';
import FBLogin from './components/FBLogin';
import GLogin from './components/GLogin';
import Weather from './components/Weather';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Travel-o-Cloud</h1>
        </header>
        <div className="menu">
            <ul>
              <li> <Link to="/FBLogin">Facebook Login</Link> </li>
              <li> <Link to="/GLogin">Google Login</Link> </li>
	      <p> OR </p> 
              <li> <Link to="/signup">Login / Sign Up</Link> </li>
              <li> <Link to="/weather"> Destination Weather</Link> </li>
            </ul>
        </div>
        <div className="App-intro">
          <Switch>
            <Route exact path="/FBLogin"  component={FBLogin} />
            <Route path="/GLogin" component={GLogin} />
            <Route path="/signup" component={AWSLogin} />
            <Route path ="/weather" component={Weather} /> 
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;

