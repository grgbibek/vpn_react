import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';


import './App.css';
import Dashboard from './dashboard/dashboard';
import Login from './Login/login';



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            {/*<ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/topics'>Topics</Link></li>
            </ul>*/}
            <Route  path='/' exact component={Login} />
           <Route  path='/dashboard' component={Dashboard} />
          {/* <Route  path='/topics' component={Topics} />*/}
        </div>
      </Router>
    );
  }
}

export default App;
