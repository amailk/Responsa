import React from 'react';
import {Home, Courses, Teacher, CourseLive} from './components';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import './App.css';

const App = () => (
  <MuiThemeProvider>
    <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/teacher">Teacher</Link></li>
        </ul>

        <Route exact path="/" component={Home}/>
        <Route path="/courses" component={Courses}/>
        <Route path="/teacher" component={Teacher}/>
        <Route path="/courseLive/:courseId" component={CourseLive}/>
      </div>
    </Router>
  </MuiThemeProvider>
);

export default App;
