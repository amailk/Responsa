import React from 'react'
import {Link} from 'react-router-dom'


export const CourseItem = (props) =>
{
    return (
        <li>
            <Link to={`/courseLive/${props.id}`}>{props.name}</Link>
            <h4>{props.professor}</h4>
        </li>
    )
}