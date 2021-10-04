import React from "react";
import { Button, Form } from "react-bootstrap";

const Contact = () => {
  return (
    <div>
      <h3 className='text-capitalize py-4' style={{ backgroundColor: "#F5F5F5" }}>
        contact with us
      </h3>
      <div className='container my-5 '>
        <div className='w-75 mx-auto p-5 rounded-3' style={{ backgroundColor: "#FFFAEE" }}>
          <h3 className='pb-3'>Get In Touch</h3>
          <Form>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Control type='name' placeholder='Full Name' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Control type='number' placeholder='Phone Number' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Control type='email' placeholder='Email' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
              <Form.Control as='textarea' rows={3} placeholder='Message' />
            </Form.Group>
            <div className='d-grid'>
              <Button variant='danger' className='mt-3 text-uppercase fw-bold' size='lg'>
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
