import React from "react";
import { Button, Card } from "react-bootstrap";

const Course = (props) => {
  const { courseName, instructor, designation, duration, fee, image } = props.course;
  return (
    // single course
    <Card>
      <Card.Img variant='top' src={image} style={{ height: "300px", width: "100%" }} />
      <Card.Body style={{ backgroundColor: "#FFFAEE" }}>
        <Card.Title className='text-danger'>{courseName}</Card.Title>
        <h4>
          Trainer: <span className='text-primary'>{instructor}</span>{" "}
        </h4>
        <p className='fw-bold'>{designation}</p>
        <p className='fw-bold'>Course Fee : {fee} taka</p>
        <p className='fw-bold'>Course Duration:{duration}</p>
        <Button variant='primary'>Purchase</Button>
      </Card.Body>
    </Card>
  );
};

export default Course;
