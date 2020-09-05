import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import './App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import RightSideBar from './components/RightSideBar';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import SignInSignUp from './pages/SignInSignUp';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector';




class App extends Component {

  unsubscribeFromAuth = null


  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      };

      setCurrentUser(userAuth)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {

    return (
      <div>
        <Container fluid >
          <Row >
            <Navbar />
            <Col sm='12' md='12' lg='8'>
              <Switch>
                <Route exact path='/' component={Homepage} />
                <Route exact path='/signin' component={SignInSignUp} />
              </Switch>


            </Col>
            <RightSideBar />
          </Row>
        </Container>
      </div >
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
