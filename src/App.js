import React, { Component } from 'react';
import {BrowserRouter, Route, NavLink, Switch, Redirect} from 'react-router-dom';
import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import noMatch from './component/404/404';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <nav>
          <ul style={{listStyle:"none"}}>
            <li  style={{display:"inline-block", margin:"0 20px 0 0"}}><NavLink to='/users'>Users</NavLink></li>
            <li  style={{display:"inline-block"}}><NavLink to='/courses'>Courses</NavLink></li>
          </ul>
          </nav>
          <Switch>
            <Route path='/users' component={Users}/>
            <Route path='/courses' component={Courses}/>
            <Redirect from='/all-courses' to='/courses'/>
            <Route component={noMatch}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
