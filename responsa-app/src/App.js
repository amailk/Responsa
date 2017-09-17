import React from 'react';
import {Home, Courses, CourseLive, Teacher} from './components';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import './App.css';

const App = () => (
  <MuiThemeProvider>
    <Router>
      <div>
        <ul className="menu">
          <li className="menuitem"><Link className="link" to="/">Home</Link></li>
          <li className="menuitem"><Link className="link" to="/courses">Courses</Link></li>
          <li className="menuitem"><Link className="link" to="/teacher">Teacher</Link></li>
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
