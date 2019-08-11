import React from 'react';
import logo from './logo.svg';
import './App.css'
import { BrowserRouter as Router, Route, Link  } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from "./pages/shop/shop.component";

const Hat = () => {
  return <h1>Hats</h1>;
}

function App() {
  return (
      <Router>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
      </Router>
  );
}

export default App;
