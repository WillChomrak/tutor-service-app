import React from 'react';
import { Row, Col } from 'react-bootstrap';

const FormSubjectFields = () => {
  return (
    <>
    <hr />
      <h2 className="form-h2">Subjects</h2>
      <Row>
        <Col md={6} lg={3}>
        <span className="subjectInput">
          <input type="checkbox" className="subjectCheck" id="math" name="subjects" value="math"></input>
          <label for="math">Math</label>
        </span>
        </Col>
        <Col md={6} lg={3}>
        <span className="subjectInput">
          <input type="checkbox" className="subjectCheck" id="science" name="subjects" value="science"></input>
          <label for="science">Science</label>
        </span>
        </Col>
        <Col md={6} lg={3}>
        <span className="subjectInput">
          <input type="checkbox" className="subjectCheck" id="english" name="subjects" value="english"></input>
          <label for="english">English</label><br />
        </span>
        </Col>
        <Col md={6} lg={3}>
        <span className="subjectInput">
          <input type="checkbox" className="subjectCheck" id="spanish" name="subjects" value="spanish"></input>
          <label for="spanish">Spanish</label><br />
        </span>
        </Col>
      </Row>
      <Row>
        
        <Col md={6} lg={3}>
        <span className="subjectInput">
          <input type="checkbox" className="subjectCheck" id="coding" name="subjects" value="coding"></input>
          <label for="coding">Coding</label><br />
        </span>
        </Col>
      </Row>
      <br />
      <hr />
    </>
  )
};

export default FormSubjectFields;
