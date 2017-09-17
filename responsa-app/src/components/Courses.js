import React, {Component} from 'react'
import {CourseItem} from "./CourseItem";
import './Courses.css'


import * as firebase from 'firebase'

export class Courses extends Component {
  constructor(props) {
    console.log("Courses constructor");
    super(props);
    this.state = {
      "courses" : []
    }
  }

  componentDidMount() {
    var dbRef = firebase.database().ref('/courses');

    dbRef.on('value', courses => {
      var courseList = [];
      courses.forEach(course => {
        courseList.push(course.val())
      });

      this.setState({"courses": courseList});
    });

  }

  render() {
    return(
      <div>
        <ul className={"course-list"}>
            {this.state.courses.map(course =>
                <CourseItem key={course.id} {...course}/>
            )}

        </ul>
      </div>
    )
  }
}

