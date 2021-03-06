import React from 'react';
import { Homepage } from './pages/homepage/homepage.component';
import Shoppage from './pages/shoppage/shoppage.component';
import './App.css';
import Header from './components/header/header.component';
import SignInSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { selectCurrentUser } from './redux/user/user.selectors';
import checkoutComponent from './pages/checkout/checkout.component';

class App extends React.Component {

  unSubscribeFromAuth=null;

  componentDidMount(){
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){
        const userRef = createUserProfileDocument(userAuth);
        (await userRef).onSnapshot(snapshot=>{
          this.props.setCurrentUser({
              id:snapshot.id,
              ...snapshot.data()
            })
          });
      }
        this.props.setCurrentUser(userAuth);
      
    });
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }

  render(){
    return (
      <div>      
      <Header></Header>
          <Switch>            
              <Route exact path='/' component={Homepage}></Route>
              <Route path='/shop' component={Shoppage}></Route>
              <Route path='/signin' render={()=>this.props.currentUser? (<Redirect to='/'/>):(<SignInSignUp/>)}></Route>
              <Route exact path='/checkout' component={checkoutComponent}></Route>
          </Switch>
      </div>
  )};
  }

const mapDispatchToProps = dispatch =>({
  setCurrentUser: user=>dispatch(setCurrentUser(user))
});

const mapStateToProps = state =>({
  currentUser: selectCurrentUser(state)
});
export default connect(mapStateToProps,mapDispatchToProps)(App);
