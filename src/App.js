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
  constructor(props) {
    super(props);
    this.state = {
      catToys: {
        'Stacey' : [
          'box',
          'ornaments',
          'riley'
        ],
        'Sasha' : [
          'papers',
          'christmas tree'
        ],
        'Foofy' : [
          'couch',
          'heater'
        ],

        'Socksie' : [
          'chipmunks',
          'blood'
        ]
      }
    }
  }
  render() {
    return (
      <Router>
      <div className="App">
      <NavBar />
      <Route path="/" exact component= {Home} />
      <Route path="/about" exact component= {About} />
      {/* <Route path="/cats" exact component= {Cats} />
      <Route path="/cats/:catName" component = {OneCat} /> */}
      <Route path="/cats" render={(props) => {
        return <Cats catList={Object.keys(this.state.catToys)}{...props} />
      }} />
      <Route path="/cats:catName" render={(props) => {
        return <OneCat toys={this.state.catToys}{...props} />
      }} />
      </div>
      </Router>
    );
  }
}

export default App;
