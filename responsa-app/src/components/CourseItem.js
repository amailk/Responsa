import React from 'react'
import {Link} from 'react-router-dom'
import './CourseItem.css'
import {Card, CardActions, CardHeader, CardMedia, CardTitle} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';


export const CourseItem = (props) =>
{
    return (
        <Card
        style={{
            backgroundColor:'#FFCDD2',
            margin:'10px'
        }}>
            <CardHeader
                title={props.name}
                subtitle={props.professor}
            />
            {/*<CardMedia
                overlay={<CardTitle title={props.id} />}
                >
                <img src="../../public/img/cp104.jpg" alt="course image"/>
            </CardMedia>*/}
            <CardActions>
                <Link to={`/courseLive/${props.id}`}><RaisedButton label="Respond"/></Link>
            </CardActions>
        </Card>
    );
}