import React from 'react';
import './Course.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Course = (props) => {
    const {course, img, instructor, start, price} = props.course;
    // console.log(props.course)
    const enrollBtn = () => props.handleEnrollButton(props.course);
    return (
        <div className="course-container mx-5">
            <div className="course-img">
                <img src={img} alt=""/>
            </div>
            <div className="course-details">
                <h3>{course}</h3>
                <br/>
                <p>by <strong>{instructor}</strong></p>
                <h5>Starts at: {start}</h5>
                <h3>Price: ${price}</h3>
                <Button onClick={enrollBtn}><FontAwesomeIcon icon={faShoppingCart}/> Enroll Now</Button>
            </div>
        </div>
    );
};

export default Course;