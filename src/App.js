import React, { Component } from 'react';
import './App.css';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Presentacion from './components/Presentacion'
import Login from './components/Login/Login'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <Router>
            <Switch>
              <Route exact path="/" component={Presentacion} />
              <Route exact path="/login" component={Login} />
            </Switch>
          </Router> 
      </Provider>
    );
  }
} 

export default App;
