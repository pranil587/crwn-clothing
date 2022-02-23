import React from 'react';
import { Homepage } from './pages/homepage/homepage.component';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import Shoppage from './pages/shoppage/shoppage.component';
import './App.css';
import Header from './components/header/header.component';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Header></Header>
        <Switch>
            <Route exact path='/' component={Homepage}></Route>
            <Route path='/shop' component={Shoppage}></Route>
        </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
