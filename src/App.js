import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';

import {
  BrowserRouter as Router, //watches for changes to URL
  Route,    //renders components
  Link      // changes URL so router sees it
} from 'react-router-dom';

import Cats from './Cats';
import About from './About';
import Home from './Home';
import OneCat from './OneCat';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <NavBar />
      <Route path="/" exact component= {Home} />
      <Route path="/about" exact component= {About} />
      <Route path="/cats" exact component= {Cats} />
      <Route path="/cats/:catName" component = {OneCat} />
      </div>
      </Router>
    );
  }
}

export default App;
