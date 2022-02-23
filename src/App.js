import React from 'react';
import { Homepage } from './pages/homepage/homepage.component';
import {BrowserRouter, Switch, Route } from 'react-router-dom';


const HatsPage = ()=>(
  <div>
    <h1>Hats Page</h1>
  </div>
);

function App() {
  return (
    <div>
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Homepage}></Route>
            <Route path='/shop/hats' component={HatsPage}></Route>
        </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
