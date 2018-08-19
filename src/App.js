import React, { Component } from 'react';
import {BrowserRouter, Route, NavLink} from 'react-router-dom';
import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <ol style={{textAlign: 'left'}}>
            <li>Add a 404 error page and render it for any unknown routes</li>
            <li>Redirect requests to /all-courses to /courses (=> Your "Courses" page)</li>
          </ol>
          <nav>
          <ul>
            <li><NavLink to='/users'>Users</NavLink></li>
            <li><NavLink to='/courses'>Courses</NavLink></li>
          </ul>
          </nav>
          <Route path='/users' component={Users}/>
          <Route path='/courses' component={Courses}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
