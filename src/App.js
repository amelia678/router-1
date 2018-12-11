import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router, //watches for changes to URL
  Route,    //renders components
  // Link      // changes URL so router sees it
} from 'react-router-dom';

import NavBar from './NavBar';
import Cats from './Cats';
import About from './About';
import Home from './Home';
import OneCat from './OneCat';
import Dogs from './Dogs';

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
      },

      Dogs: {
        'Riley': {
          'owner': 'krystan',
          'toys': [
            'bones',
            'cat toys'
          ]
        },

        'Toby': {
          'owner': 'kate',
          'toys': [
            'lamby',
            'bone'
          ]
          },

        'Peaches' :{
          'owner': 'robbie',
          'toys' : [
            'heater',
            'porkchops'
          ]
        }
          
        
      }
    }
  }
  render() {
    return (
      <Router>
      {/* <div className="App"> */}
      <div>
      <NavBar />
      <Route path="/" exact component= {Home} />
      <Route path="/about"  component= {About} />
      <Route path="/cats" render={(props) => {
        return <Cats catList={Object.keys(this.state.catToys)} {...props} />
      }} />
      <Route path="/cats/:catName" render={(props) => {
        return <OneCat toys={this.state.catToys} {...props} />
      }} />
      {/* <Route path="/dogs" component={Dogs} /> */}
      <Route path="/dogs" render={(props) => {
        return <Dogs dogList={Object.keys(this.state.Dogs)} {...props} />
      }} />
      </div>
      </Router>
    );
  }
}

export default App;
