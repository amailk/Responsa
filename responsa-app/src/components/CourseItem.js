import React from 'react'

export const CourseItem = (props) =>
{
    return (
        <li>
            <h3>{props.name}</h3>
            <h4>{props.professor}</h4>
        </li>
    )
}