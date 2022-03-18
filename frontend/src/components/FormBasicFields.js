import React from 'react';
import { Row, Col } from 'react-bootstrap';

const FormBasicFields = () => {
  return (
    <>
          
      <Row>
          <Col lg={{span: 4, offset: 2}}>
            <input className="tutor-input" placeholder="First name" type="text" id="fname" name="fname" required></input>
          </Col>
          <Col lg={4}>
              <input className="tutor-input" placeholder="Last name" type="text" id="lname" name="lname" required></input>  <br />                  
          </Col>
        </Row>
        <Row>
          <Col lg={{span: 8, offset: 2}}>
            <input className="tutor-input" placeholder="Email" type="text" id="email" name="email" required></input><br />
          </Col>
        </Row>
        <Row>
          <Col lg={{span: 8, offset: 2}}>
            <input className="tutor-input" placeholder="City" type="text" id="city" name="city" required></input><br />
          </Col>
        </Row>
        <Row>
          <Col lg={{span: 8, offset: 2}}>
            <input className="tutor-input" placeholder="Country" type="text" id="country" name="country" required></input>  <br />   
          </Col>
      </Row>
      <br />
    </>
  )
};

export default FormBasicFields;
