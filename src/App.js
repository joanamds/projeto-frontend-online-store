import React from 'react';
import { Switch, HashRouter, Route } from 'react-router-dom';
import './App.css';
import Details from './pages/Details';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import Checkout from './pages/Checkout';

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/shopping-cart" component={ ShoppingCart } />
          <Route exact path="/" component={ Home } />
          <Route path="/details/:id" component={ Details } />
          <Route path="/checkout" component={ Checkout } />
        </Switch>

      </HashRouter>
    );
  }
}

export default App;
