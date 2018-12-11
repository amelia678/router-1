import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router, //watches for changes to URL
  Route,    //renders components
  Link      // changes URL so router sees it
} from 'react-router-dom';

import Cats from './Cats';
import About from './About';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/cats">Cats</Link></li>


      </ul>
      <Route path="/" exact component= {Home} />
      <Route path="/about" exact component= {About} />
      <Route path="/cats" exact component= {Cats} />
      
      </div>
      </Router>
    );
  }
}

export default App;
