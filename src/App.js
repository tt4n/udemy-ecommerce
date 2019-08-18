import React from 'react';
import logo from './logo.svg';
import './App.css'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import AuthPage from "./pages/auth-page/auth.component";

const Hat = () => {
  return <h1>Hats</h1>;
}

function App() {
  return (
    <Router>
        <div>
            <Header></Header>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/shop' component={ShopPage} />
                <Route exact path='/auth' component={AuthPage} />
            </Switch>
        </div>
    </Router>
  );
}

export default App;
