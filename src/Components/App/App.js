import React from 'react';
import logo from './logo.svg';
import './App.css';
import Customers from './Customers';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

class  App extends React.Component{
  render(){
  return (
    <Router basename={process.env.PUBLIC_URL}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <h4>Simple React App</h4>
      </header>
      
      <Redirect to="/customerList"/>
      <Route exact path='/customerlist' component={Customers} />
    </div>
    </Router>
  );
}
}
export default App;
