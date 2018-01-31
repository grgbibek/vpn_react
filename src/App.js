import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';


import './App.css'
import About from './components/About';
import Home from './components/Home';
import Topics from './components/Topics';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/topics'>Topics</Link></li>
            </ul>
            <Route  path='/' exact component={Home} />
            <Route  path='/about' component={About} />
            <Route  path='/topics' component={Topics} />
        </div>
      </Router>
    );
  }
}

export default App;
