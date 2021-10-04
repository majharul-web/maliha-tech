import React from "react";
import { Card } from "react-bootstrap";

const Member = (props) => {
    const{instructor,designation,image}=props.member;
  return (
    <div>
      <Card>
        <Card.Img variant='top' src={image} style={{ height: "300px", width: "100%" }} />
        <Card.Body style={{ backgroundColor: "#FFFAEE" }}>  
          <h4>
            Trainer: <span className='text-primary'>{instructor}</span>{" "}
          </h4>
          <p className='fw-bold'>{designation}</p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Member;
