import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Homepage from './pages/Homepage';
import SignInSignUp from './pages/SignInSignUp';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';


class App extends Component {

  unsubscribeFromAuth = null



  render() {

    return (
      <div>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/signin' component={SignInSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
