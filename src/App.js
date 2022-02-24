import React from 'react';
import { Homepage } from './pages/homepage/homepage.component';
import {BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';
import Shoppage from './pages/shoppage/shoppage.component';
import './App.css';
import Header from './components/header/header.component';
import SignInSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {

  constructor(){
    super();
    this.state = {currentUser:null};
  }

  unSubscribeFromAuth=null;

  componentDidMount(){
    this.unSubscribeFromAuth = auth.onAuthStateChanged(user=>{this.setState({currentUser:user})});
    console.log(this.state.currentUser);
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }

  render(){
    return (
      <div>
      <BrowserRouter>
      <Header currentUser={this.state.currentUser}></Header>
          <Switch>            
              <Route exact path='/' component={Homepage}></Route>
              <Route path='/shop' component={Shoppage}></Route>
              <Route path='/signin' component={SignInSignUp}></Route>
          </Switch>
      </BrowserRouter>
      </div>
  )};
  }

export default App;
