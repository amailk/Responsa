import React from 'react'
import {Link} from 'react-router-dom'
import './CourseItem.css'


export const CourseItem = (props) =>
{
    return (
        <li className="course-item">
            <Link className="course-link" to={`/courseLive/${props.id}`}>{props.name}</Link>
            <h4>{props.professor}</h4>
        </li>
    )
}