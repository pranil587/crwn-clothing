import React from 'react';
import { Homepage } from './pages/homepage/homepage.component';
import {BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';
import Shoppage from './pages/shoppage/shoppage.component';
import './App.css';
import Header from './components/header/header.component';
import SignInSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {

  constructor(){
    super();
    this.state = {currentUser:null};
  }

  unSubscribeFromAuth=null;

  componentDidMount(){
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){
        const userRef = createUserProfileDocument(userAuth);
        (await userRef).onSnapshot(snapshot=>{
          this.setState({
            currentUser:{
              id:snapshot.id,
              ...snapshot.data()
            }
          }, ()=>{console.log(this.state);});
        });
        
      }else{
        this.setState({currentUser:null});
      }
    });
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
