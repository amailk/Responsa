import React from 'react';
import {Home, Courses, Teacher} from './components';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';

import {CourseLive} from "./components/CourseLive";

const App = () => (
      <Router>
        <div>
            <ul className="menu" >
                <li className="menuitem"><Link className="link" to="/">Home</Link></li>
                <li className="menuitem"><Link className="link" to="/courses">Courses</Link></li>
            </ul>

            <Route exact path="/" component={Home}/>
            <Route path="/courses" component={Courses}/>
            <Route path="/courseLive/:courseId" component={CourseLive} />

        </div>
      </Router>
);

export default App;
